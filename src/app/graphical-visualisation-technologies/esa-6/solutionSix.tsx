/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useRef, useState } from 'react';
import plane from './plane';
import simple_sphere from './simple_sphere';
import torus from './torus';

const mat4 = require('gl-mat4');
const mat3 = require('gl-mat3');

export const SolutionSix: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [camera, setCamera] = useState({
        // Initial position of the camera.
        eye: [0, 1, 4],
        // Point to look at.
        center: [0, 0, 0],
        // Roll and pitch of the camera.
        up: [0, 1, 0],
        // Opening angle given in radian.
        // radian = degree*2*PI/360.
        fovy: (60.0 * Math.PI) / 180,
        // Camera near plane dimensions:
        // value for left right top bottom in projection.
        lrtb: 2.0,
        // View matrix.
        vMatrix: mat4.create(),
        // Projection matrix.
        pMatrix: mat4.create(),
        // Projection types: ortho, perspective, frustum.
        projectionType: 'perspective',
        // Angle to Z-Axis for camera when orbiting the center
        // given in radian.
        zAngle: 0,
        // Distance in XZ-Plane from center when orbiting.
        distance: 4,
    });
    const [animationActive, setAnimationActive] = useState(false);
    const [animationTime, setAnimationTime] = useState(0);

    const keyDownHandler = (event: KeyboardEvent) => {
        const key = event.key;
        const sign = event.shiftKey ? -1 : 1;

        const deltaRotate = Math.PI / 36;
        const deltaTranslate = 0.2;

        // Change projection of scene.
        switch (key) {
            case 'ArrowLeft':
                setCamera((prev) => ({
                    ...prev,
                    zAngle: prev.zAngle - deltaRotate,
                }));
                setAnimationActive(false);
                break;
            case 'ArrowRight':
                setCamera((prev) => ({
                    ...prev,
                    zAngle: prev.zAngle + deltaRotate,
                }));
                setAnimationActive(false);
                break;
            case 'n':
            case 'N':
                // Camera fovy in radian.
                setCamera((prev) => ({
                    ...prev,
                    fovy: camera.fovy + (sign * 5 * Math.PI) / 180,
                }));
                setAnimationActive(false);
                break;
            case 'ArrowUp':
                // Move camera up and down.
                setCamera((prev) => ({
                    ...prev,
                    eye: [0, prev.eye[1] + deltaTranslate, 4],
                }));
                setAnimationActive(false);
                break;
            case 'k':
            case 'K':
                setAnimationActive(!animationActive);
                break;

            case 'ArrowDown':
                // Move camera up and down.
                setCamera((prev) => ({
                    ...prev,
                    eye: [0, prev.eye[1] - deltaTranslate, 4],
                }));
                setAnimationActive(false);
                break;
        }
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (animationActive) {
            intervalId = setTimeout(() => {
                setAnimationTime((prev) => prev + 0.05);
            }, 20);
        }

        window.addEventListener(
            'keydown',
            function (e) {
                if (
                    [
                        'Space',
                        'ArrowUp',
                        'ArrowDown',
                        'ArrowLeft',
                        'ArrowRight',
                    ].indexOf(e.code) > -1
                ) {
                    e.preventDefault();
                }
            },
            false
        );
        document.addEventListener('keydown', keyDownHandler);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        const vsSource = `
                attribute vec3 aPosition;
                attribute vec3 aNormal;

                uniform mat4 uPMatrix;
                uniform mat4 uMVMatrix;

                varying vec4 vColor;

                void main(){
                    gl_Position = uPMatrix * uMVMatrix * vec4(aPosition, 1.0);

                    vColor = vec4(aNormal.x, aNormal.y, aNormal.z, 1.0);
                    vColor = (vColor + 1.0) / 2.0;
                }
            `;
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader!, vsSource);
        gl.compileShader(vertexShader!);

        // Fragment Shader

        const fsSource = `
                precision mediump float;
                varying vec4 vColor;

                void main() {
                    gl_FragColor = vColor;
                }
            `;
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader!, fsSource);
        gl.compileShader(fragmentShader!);

        // Create and link shader program
        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram!, vertexShader!);
        gl.attachShader(shaderProgram!, fragmentShader!);
        gl.linkProgram(shaderProgram!);
        gl.useProgram(shaderProgram);

        if (shaderProgram) {
            shaderProgram.pMatrixUniform = gl.getUniformLocation(
                shaderProgram,
                'uPMatrix'
            );
            shaderProgram.mvMatrixUniform = gl.getUniformLocation(
                shaderProgram,
                'uMVMatrix'
            );
        }
        const models = [];
        function createModel(
            modelData,
            style,
            color,
            translate,
            rotate,
            scale
        ) {
            const model = {};
            if (color && translate && rotate && scale) {
                model.color = color;
                model.fillstyle = style;
                model.translate = translate;
                model.rotate = rotate;
                model.scale = scale;
            }

            modelData.createVertexData.apply(model);

            if (gl && model) {
                // Setup position vertex buffer object.
                model.vboPos = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, model.vboPos);
                gl.bufferData(gl.ARRAY_BUFFER, model.vertices, gl.STATIC_DRAW);
                // Bind vertex buffer to attribute variable.
                shaderProgram.positionAttrib = gl.getAttribLocation(
                    shaderProgram,
                    'aPosition'
                );
                gl.enableVertexAttribArray(shaderProgram.positionAttrib);

                // Setup normal vertex buffer object.
                model.vboNormal = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, model.vboNormal);
                gl.bufferData(gl.ARRAY_BUFFER, model.normals, gl.STATIC_DRAW);
                // Bind buffer to attribute variable.
                shaderProgram.normalAttrib = gl.getAttribLocation(
                    shaderProgram,
                    'aNormal'
                );
                gl.enableVertexAttribArray(shaderProgram.normalAttrib);

                // Setup lines index buffer object.
                model.iboLines = gl.createBuffer();
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.iboLines);
                gl.bufferData(
                    gl.ELEMENT_ARRAY_BUFFER,
                    model.indicesLines,
                    gl.STATIC_DRAW
                );
                model.iboLines.numberOfElements = model.indicesLines.length;
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

                // Setup triangle index buffer object.
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
            // Create and initialize Model-View-Matrix.

            // Create and initialize Model-Matrix.
            model.mMatrix = mat4.create();

            // Create and initialize Model-View-Matrix.
            model.mvMatrix = mat4.create();

            // Create and initialize Normal-Matrix
            model.nMatrix = mat3.create();

            models.push(model);
        }
        // modelData, style, color, translate, rotate, scale;
        createModel(
            torus,
            'fillwireframe',
            [0.4, 0.85, 0.64, 1],
            [0, 0, 0],
            [0, 0 + animationTime, 0],
            [1, 1, 1]
        );
        createModel(
            plane,
            'wireframe',
            [0.4, 0.85, 0.64, 1],
            [0, 0, 0],
            [0, 0, 0],
            [0.5, 0.5, 0.5]
        );
        createModel(
            simple_sphere,
            'fill',
            [0.4, 0.85, 0.64, 1],
            [
                0,
                1 * Math.cos(animationTime + Math.PI) + 1,
                1 * Math.sin(animationTime + Math.PI),
            ],
            [0, 0, 0],
            [0.1, 0.1, 0.1]
        );

        createModel(
            simple_sphere,
            'fill',
            [0.45, 0.77, 0.98, 1],
            [
                1 * Math.cos(animationTime - (2 * Math.PI) / 2),
                1 * Math.sin(animationTime - (2 * Math.PI) / 2) - 1,
                0,
            ],
            [0, 0, 0],
            [0.1, 0.1, 0.1]
        );

        createModel(
            simple_sphere,
            'fill',
            [0.45, 0.77, 0.98, 1],
            [
                0,
                1 * Math.cos(animationTime + Math.PI) - 1,
                -1 * Math.sin(animationTime + Math.PI),
            ],
            [0, 0, 0],
            [0.1, 0.1, 0.1]
        );

        createModel(
            simple_sphere,
            'fill',
            [0.45, 0.77, 0.98, 1],
            [
                -1 * Math.cos(animationTime + (2 * Math.PI) / 2),
                1 * Math.sin(animationTime + (2 * Math.PI) / 2) + 1,
                0,
            ],
            [0, 0, 0],
            [0.1, 0.1, 0.1]
        );

        // Draw the torus
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.viewport(0, 0, canvas.width, canvas.height);

        gl.frontFace(gl.CCW);
        gl.enable(gl.CULL_FACE);
        gl.cullFace(gl.BACK);

        // Depth(Z)-Buffer.
        gl.enable(gl.DEPTH_TEST);

        // // Polygon offset of rastered Fragments.
        gl.enable(gl.POLYGON_OFFSET_FILL);
        gl.polygonOffset(0.5, 0);

        // // Set viewport.
        // @ts-ignore
        gl.viewport(0, 0, canvas.width, canvas.height);

        // // Init camera.
        // // Set projection aspect ratio.
        //@ts-ignore
        camera.aspect = canvas.width / canvas.height;

        if (!gl) {
            return;
        }
        // Clear framebuffer and depth-/z-buffer.
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Set projection uniform.
        gl.uniformMatrix4fv(
            shaderProgram.pMatrixUniform,
            false,
            camera.pMatrix
        );

        const x = 0,
            z = 2;
        camera.eye[x] = camera.center[x];
        camera.eye[z] = camera.center[z];
        camera.eye[x] += camera.distance * Math.sin(camera.zAngle);
        camera.eye[z] += camera.distance * Math.cos(camera.zAngle);

        // Set projection Matrix.
        switch (camera.projectionType) {
            case 'ortho':
                v = camera.lrtb;
                mat4.ortho(camera.pMatrix, -v, v, -v, v, -10, 10);
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
        // Set projection uniform.
        gl.uniformMatrix4fv(
            shaderProgram.pMatrixUniform,
            false,
            camera.pMatrix
        );

        // Set view matrix depending on camera.
        mat4.lookAt(camera.vMatrix, camera.eye, camera.center, camera.up);

        // Loop over models.
        for (let i = 0; i < models.length; i++) {
            mat4.copy(models[i].mvMatrix, camera.vMatrix);
            // Use shortcut variables.
            const mMatrix = models[i].mMatrix;
            const mvMatrix = models[i].mvMatrix;

            // Reset matrices to identity.
            mat4.identity(mMatrix);
            mat4.identity(mvMatrix);

            // Translate.
            mat4.translate(mMatrix, mMatrix, models[i].translate);

            // Rotate.
            mat4.rotateX(mMatrix, mMatrix, models[i].rotate[0]);
            mat4.rotateY(mMatrix, mMatrix, models[i].rotate[1]);
            mat4.rotateZ(mMatrix, mMatrix, models[i].rotate[2]);

            // Scale
            mat4.scale(mMatrix, mMatrix, models[i].scale);

            // Combine view and model matrix
            // by matrix multiplication to mvMatrix.
            mat4.multiply(mvMatrix, camera.vMatrix, mMatrix);

            gl.uniformMatrix4fv(
                shaderProgram.mvMatrixUniform,
                false,
                models[i].mvMatrix
            );

            gl.uniform4fv(shaderProgram.colorUniform, models[i].color);

            gl.bindBuffer(gl.ARRAY_BUFFER, models[i].vboPos);
            gl.vertexAttribPointer(
                shaderProgram.positionAttrib,
                3,
                gl.FLOAT,
                false,
                0,
                0
            );

            // Setup normal VBO.
            gl.bindBuffer(gl.ARRAY_BUFFER, models[i].vboNormal);
            gl.vertexAttribPointer(
                shaderProgram.normalAttrib,
                3,
                gl.FLOAT,
                false,
                0,
                0
            );

            // Setup rendering tris.
            const fill = models[i].fillstyle.search(/fill/) !== -1;
            if (fill) {
                gl.enableVertexAttribArray(shaderProgram.normalAttrib);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, models[i].iboTris);
                gl.drawElements(
                    gl.TRIANGLES,
                    models[i].iboTris.numberOfElements,
                    gl.UNSIGNED_SHORT,
                    0
                );
            }

            // Setup rendering lines.
            const wireframe = models[i].fillstyle.search(/wireframe/) !== -1;
            if (wireframe) {
                gl.disableVertexAttribArray(shaderProgram.normalAttrib);
                gl.vertexAttrib3f(shaderProgram.normalAttrib, 0, 0, 0);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, models[i].iboLines);
                gl.drawElements(
                    gl.LINES,
                    models[i].iboLines.numberOfElements,
                    gl.UNSIGNED_SHORT,
                    0
                );
            }
        }

        // if (areaVisible) {
        //     gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
        // }
        // if (gitterVisible) {
        //     gl.drawElements(gl.LINE_LOOP, indices.length, gl.UNSIGNED_SHORT, 0);
        // }
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
            clearInterval(intervalId);
        };
    }, [camera, keyDownHandler, animationActive, animationTime]);

    return (
        <div className='grid grid-cols-1 gap-4 justify-items-center'>
            <div>
                <canvas ref={canvasRef} width={1200} height={600} />
                <p>Bedienung:</p>
                <p>
                    k/K: Animieren umschalten: Wenn die Ansicht geändert wird
                    hält die Animation an.
                </p>
                <p>Pfeiltasten: Ansicht drehen</p>
                <p>n/N: Rein- und Rauszoomen</p>
            </div>
        </div>
    );
};
