/* eslint-disable @typescript-eslint/no-unsafe-return */
// @ts-nocheck
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as mat3 from 'gl-matrix/mat3';
import * as mat4 from 'gl-matrix/mat4';
import * as vec4 from 'gl-matrix/vec4';
import { useEffect, useRef } from 'react';
import plane from './plane';
import torus from './torus';
export const SolutionEight: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let gl;
        let prog;
        const models = [];
        let interactiveModel;
        const canvas = canvasRef.current;
        const vsSource = `
			attribute vec3 aPosition;
			attribute vec3 aNormal;

			uniform mat4 uPMatrix;
			uniform mat4 uMVMatrix;
			uniform mat3 uNMatrix;
			uniform vec3 uCameraPosition; 

			varying vec4 vColor;
			varying vec3 vViewDirection; 

						
			
			uniform vec3 ambientLight;
			
			
			const int MAX_LIGHT_SOURCES = 8;
			struct LightSource {
				bool isOn;
				vec3 position;
				vec3 color;
			};
			uniform LightSource light[MAX_LIGHT_SOURCES];
			
			
			struct PhongMaterial {
				vec3 ka;
				vec3 kd;
				vec3 ks;
				float ke; 
			};
			uniform PhongMaterial material;
			
			vec3 phong(vec3 p, vec3 n, vec3 v, LightSource l) {
				
				vec3 L = l.color;
			
				vec3 s = normalize(l.position - p);
				vec3 r = reflect(-s, n);
				
				float sn = max( dot(s,n), 0.0);
				float rv = max( dot(r,v), 0.0);
							
				vec3 diffuse = material.kd * L * sn;
								
				vec3 specular = material.ks * L * pow(rv, material.ke);
			
				return diffuse + specular;			
			
			}
			
			
			vec3 phong(vec3 p, vec3 n, vec3 v) {
			
				
				vec3 result = material.ka * ambientLight;
				
				
				for(int j=0; j < MAX_LIGHT_SOURCES; j++){
					if(light[j].isOn){
						result += phong(p, n, v, light[j]);
					}
				}
				return result;
			}
			
			void main(){
				
				vec4 tPosition = uMVMatrix * vec4(aPosition, 1.0);
				
				gl_Position = uPMatrix * tPosition;
			
				vec3 tNormal = normalize(uNMatrix * aNormal);
				
				vec4 worldPosition = uMVMatrix * vec4(aPosition, 1.0);
				vViewDirection = normalize(uCameraPosition - worldPosition.xyz);
				
				
				vec3 v = normalize(-tPosition.xyz);	
								
				vColor = vec4( phong(tPosition.xyz, tNormal, v), 1.0);
			}
            `;

        const fsSource = `
        precision mediump float;

		varying vec4 vColor;

		void main() {
			
			float intensity = dot(normalize(vColor.xyz), vec3(0.0, 0.0, 1.0));
			if (intensity > 0.95) {
				intensity = 1.0;
			} else if (intensity > 0.5) {
				intensity = 0.8;
			} else if (intensity > 0.25) {
				intensity = 0.5;
			} else {
				intensity = 0.3;
			}
			vec4 toonColor = vec4(intensity * vColor.rgb, vColor.a);
			gl_FragColor = toonColor;
		}
            `;

        const camera = {
            eye: [0, 1, 5],

            center: [0, 0, 0],

            up: [0, 1, 0],

            fovy: (60.0 * Math.PI) / 180,

            lrtb: 2.0,

            vMatrix: mat4.create(),

            pMatrix: mat4.create(),

            projectionType: 'perspective',

            zAngle: 0,

            distance: 5,
        };

        const illumination = {
            ambientLight: [0.5, 0.5, 0.5],
            light: [
                { isOn: true, position: [3, 1, 3], color: [1, 1, 1] },
                { isOn: true, position: [-3, 1, -3], color: [1, 1, 1] },
            ],
        };
        function start() {
            init();
            render();
        }

        function init() {
            initWebGL();
            initShaderProgram();
            initUniforms();
            initModels();
            initEventHandler();
            initPipline();
        }

        function initWebGL() {
            gl = canvas.getContext('experimental-webgl');
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
        }

        function initPipline() {
            gl.clearColor(0, 0, 0, 0.4);

            gl.frontFace(gl.CCW);
            gl.enable(gl.CULL_FACE);
            gl.cullFace(gl.BACK);

            gl.enable(gl.DEPTH_TEST);

            gl.enable(gl.POLYGON_OFFSET_FILL);
            gl.polygonOffset(0.5, 0);

            gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);

            camera.aspect = gl.viewportWidth / gl.viewportHeight;
        }

        function initShaderProgram() {
            const vs = initShader(gl.VERTEX_SHADER, vsSource);

            const fs = initShader(gl.FRAGMENT_SHADER, fsSource);

            prog = gl.createProgram();
            gl.attachShader(prog, vs);
            gl.attachShader(prog, fs);
            gl.bindAttribLocation(prog, 0, 'aPosition');
            gl.linkProgram(prog);
            gl.useProgram(prog);
        }

        function initShader(shaderType, source) {
            const shader = gl.createShader(shaderType);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            return shader;
        }

        function initUniforms() {
            prog.pMatrixUniform = gl.getUniformLocation(prog, 'uPMatrix');

            prog.mvMatrixUniform = gl.getUniformLocation(prog, 'uMVMatrix');

            prog.nMatrixUniform = gl.getUniformLocation(prog, 'uNMatrix');

            prog.colorUniform = gl.getUniformLocation(prog, 'uColor');

            prog.cameraPositionUniform = gl.getUniformLocation(
                prog,
                'uCameraPosition'
            );

            prog.ambientLightUniform = gl.getUniformLocation(
                prog,
                'ambientLight'
            );

            prog.lightUniform = [];

            for (let j = 0; j < illumination.light.length; j++) {
                const lightNb = 'light[' + j + ']';

                const l = {};
                l.isOn = gl.getUniformLocation(prog, lightNb + '.isOn');
                l.position = gl.getUniformLocation(prog, lightNb + '.position');
                l.color = gl.getUniformLocation(prog, lightNb + '.color');
                prog.lightUniform[j] = l;
            }

            prog.materialKaUniform = gl.getUniformLocation(prog, 'material.ka');
            prog.materialKdUniform = gl.getUniformLocation(prog, 'material.kd');
            prog.materialKsUniform = gl.getUniformLocation(prog, 'material.ks');
            prog.materialKeUniform = gl.getUniformLocation(prog, 'material.ke');
        }

        function createPhongMaterial(material) {
            material = material || {};

            material.ka = material.ka || [0.3, 0.3, 0.3];
            material.kd = material.kd || [0.6, 0.6, 0.6];
            material.ks = material.ks || [0.8, 0.8, 0.8];
            material.ke = material.ke || 10;

            return material;
        }

        function initModels() {
            const fs = 'fill';

            const mDefault = createPhongMaterial();
            const mRed = createPhongMaterial({ kd: [1, 0, 0] });
            const mGreen = createPhongMaterial({ kd: [0, 1, 0] });
            const mBlue = createPhongMaterial({ kd: [0, 0, 1] });

            createModel(
                torus,
                fs,
                [1, 1, 1, 1],
                [0, 0.5, 0],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                mRed
            );

            createModel(
                torus,
                fs,
                [1, 1, 1, 1],
                [-2, -0.5, -3],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                mGreen
            );

            createModel(
                torus,
                fs,
                [1, 1, 1, 1],
                [2, 1, 1],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                mBlue
            );

            createModel(
                plane,
                'fillwireframe',
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                mDefault
            );

            interactiveModel = models[0];
        }

        function createModel(
            modelData,
            fillstyle,
            color,
            translate,
            rotate,
            scale,
            material
        ) {
            const model = {};
            model.fillstyle = fillstyle;
            model.color = color;
            initDataAndBuffers(model, modelData);
            initTransformations(model, translate, rotate, scale);
            model.material = material;

            models.push(model);
        }

        function initTransformations(model, translate, rotate, scale) {
            model.translate = translate;
            model.rotate = rotate;
            model.scale = scale;

            model.mMatrix = mat4.create();

            model.mvMatrix = mat4.create();

            model.nMatrix = mat3.create();
        }

        function initDataAndBuffers(model, modelData) {
            modelData.createVertexData.apply(model);

            model.vboPos = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, model.vboPos);
            gl.bufferData(gl.ARRAY_BUFFER, model.vertices, gl.STATIC_DRAW);

            prog.positionAttrib = gl.getAttribLocation(prog, 'aPosition');
            gl.enableVertexAttribArray(prog.positionAttrib);

            model.vboNormal = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, model.vboNormal);
            gl.bufferData(gl.ARRAY_BUFFER, model.normals, gl.STATIC_DRAW);

            prog.normalAttrib = gl.getAttribLocation(prog, 'aNormal');
            gl.enableVertexAttribArray(prog.normalAttrib);

            model.iboLines = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.iboLines);
            gl.bufferData(
                gl.ELEMENT_ARRAY_BUFFER,
                model.indicesLines,
                gl.STATIC_DRAW
            );
            model.iboLines.numberOfElements = model.indicesLines.length;
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

            model.iboTris = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.iboTris);
            gl.bufferData(
                gl.ELEMENT_ARRAY_BUFFER,
                model.indicesTris,
                gl.STATIC_DRAW
            );
            model.iboTris.numberOfElements = model.indicesTris.length;
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        }

        function initEventHandler() {
            const deltaRotate = Math.PI / 36;
            const deltaTranslate = 0.05;

            window.onkeydown = function (evt) {
                const key = evt.key;
                const c = key;

                window.console.log(evt.key);

                switch (c) {
                    case 'X':
                        interactiveModel.rotate[0] += deltaRotate;
                        break;
                    case 'Y':
                        interactiveModel.rotate[1] += deltaRotate;
                        break;
                }

                switch (c) {
                    case 'ArrowLeft':
                        camera.zAngle += deltaRotate;
                        break;
                    case 'ArrowRight':
                        camera.zAngle -= deltaRotate;
                        break;
                    case 'ArrowUp':
                        camera.eye[1] += deltaTranslate;
                        break;
                    case 'ArrowDown':
                        camera.eye[1] -= deltaTranslate;
                        break;
                    case 'n':
                        camera.distance -= deltaTranslate;
                        break;
                    case 'N':
                        camera.distance += deltaTranslate;
                        break;
                }
                if (c === 'L' || c === 'l') {
                    const angle = Date.now() / 1000;
                    moveLights(angle);
                }

                if (
                    c === 'ArrowLeft' ||
                    c === 'ArrowRight' ||
                    c === 'ArrowUp' ||
                    c === 'ArrowDown' ||
                    c === 'z' ||
                    c === 'Z' ||
                    c === 'n' ||
                    c === 'N' ||
                    c === 'L' ||
                    c === 'l'
                ) {
                    render();
                }
            };
        }

        /**
         * Run the rendering pipeline.
         */
        function render() {
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            const cameraPosition = [0, 1, 4];
            gl.uniform3fv(prog.cameraPositionUniform, cameraPosition);

            setProjection();

            calculateCameraOrbit();

            mat4.lookAt(camera.vMatrix, camera.eye, camera.center, camera.up);

            gl.uniform3fv(prog.ambientLightUniform, illumination.ambientLight);

            for (let j = 0; j < illumination.light.length; j++) {
                gl.uniform1i(
                    prog.lightUniform[j].isOn,
                    illumination.light[j].isOn
                );

                const lightPos = [].concat(illumination.light[j].position);

                lightPos.push(1.0);
                vec4.transformMat4(lightPos, lightPos, camera.vMatrix);

                lightPos.pop();
                gl.uniform3fv(prog.lightUniform[j].position, lightPos);
                gl.uniform3fv(
                    prog.lightUniform[j].color,
                    illumination.light[j].color
                );
            }

            for (let i = 0; i < models.length; i++) {
                updateTransformations(models[i]);

                gl.uniformMatrix4fv(
                    prog.mvMatrixUniform,
                    false,
                    models[i].mvMatrix
                );
                gl.uniformMatrix3fv(
                    prog.nMatrixUniform,
                    false,
                    models[i].nMatrix
                );

                gl.uniform4fv(prog.colorUniform, models[i].color);

                gl.uniform3fv(prog.materialKaUniform, models[i].material.ka);
                gl.uniform3fv(prog.materialKdUniform, models[i].material.kd);
                gl.uniform3fv(prog.materialKsUniform, models[i].material.ks);
                gl.uniform1f(prog.materialKeUniform, models[i].material.ke);

                draw(models[i]);
            }
        }

        function calculateCameraOrbit() {
            const x = 0,
                z = 2;
            camera.eye[x] = camera.center[x];
            camera.eye[z] = camera.center[z];
            camera.eye[x] += camera.distance * Math.sin(camera.zAngle);
            camera.eye[z] += camera.distance * Math.cos(camera.zAngle);
        }

        function setProjection() {
            switch (camera.projectionType) {
                case 'ortho':
                    v = camera.lrtb;
                    mat4.ortho(camera.pMatrix, -v, v, -v, v, -10, 100);
                    break;
                case 'frustum':
                    v = camera.lrtb;
                    mat4.frustum(
                        camera.pMatrix,
                        -v / 2,
                        v / 2,
                        -v / 2,
                        v / 2,
                        1,
                        10
                    );
                    break;
                case 'perspective':
                    mat4.perspective(
                        camera.pMatrix,
                        camera.fovy,
                        camera.aspect,
                        1,
                        10
                    );
                    break;
            }

            gl.uniformMatrix4fv(prog.pMatrixUniform, false, camera.pMatrix);
        }

        function updateTransformations(model) {
            const mMatrix = model.mMatrix;
            const mvMatrix = model.mvMatrix;

            mat4.identity(mMatrix);
            mat4.identity(mvMatrix);

            mat4.translate(mMatrix, mMatrix, model.translate);

            mat4.rotateX(mMatrix, mMatrix, model.rotate[0]);
            mat4.rotateY(mMatrix, mMatrix, model.rotate[1]);
            mat4.rotateZ(mMatrix, mMatrix, model.rotate[2]);

            mat4.scale(mMatrix, mMatrix, model.scale);

            mat4.multiply(mvMatrix, camera.vMatrix, mMatrix);

            mat3.normalFromMat4(model.nMatrix, mvMatrix);
        }

        function draw(model) {
            gl.bindBuffer(gl.ARRAY_BUFFER, model.vboPos);
            gl.vertexAttribPointer(
                prog.positionAttrib,
                3,
                gl.FLOAT,
                false,
                0,
                0
            );

            gl.bindBuffer(gl.ARRAY_BUFFER, model.vboNormal);
            gl.vertexAttribPointer(prog.normalAttrib, 3, gl.FLOAT, false, 0, 0);

            const fill = (model.fillstyle.search(/fill/) = -1);
            if (fill) {
                gl.enableVertexAttribArray(prog.normalAttrib);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.iboTris);
                gl.drawElements(
                    gl.TRIANGLES,
                    model.iboTris.numberOfElements,
                    gl.UNSIGNED_SHORT,
                    0
                );
            }

            const wireframe = model.fillstyle.search(/wireframe/) !== -1;
            if (wireframe) {
                gl.uniform4fv(prog.colorUniform, [0, 0, 0, 1]);
                gl.disableVertexAttribArray(prog.normalAttrib);
                gl.vertexAttrib3f(prog.normalAttrib, 0, 0, 0);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.iboLines);
                gl.drawElements(
                    gl.LINES,
                    model.iboLines.numberOfElements,
                    gl.UNSIGNED_SHORT,
                    0
                );
            }
        }

        function moveLights(angle) {
            const radius1 = 2.0;
            const radius2 = 6.0;

            illumination.light[0].position[0] = Math.cos(angle) * radius1;
            illumination.light[0].position[2] = Math.sin(angle) * radius1;

            const angle2 = angle + Math.PI;
            illumination.light[1].position[0] = Math.cos(angle2) * radius2;
            illumination.light[1].position[2] = Math.sin(angle2) * radius2;
        }

        function start() {
            init();
            render();
        }

        start();
    }, []);

    return (
        <div className='grid grid-cols-1 gap-4 justify-items-center'>
            <div>
                <canvas ref={canvasRef} width={1200} height={600} />
                <p>Bedienung:</p>
                <p>Pfeiltasten: Ansicht drehen (Vertikal/Horizontal)</p>
                <p>n/N: Rein- und Rauszoomen</p>
                <p>l/L: Lichtquellen rotieren</p>
            </div>
        </div>
    );
};
