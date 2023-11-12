/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useRef } from 'react';
import { FigureProps } from './donut';

export const Horn: React.FC<FigureProps> = ({ gitterVisible, areaVisible }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        const compileShader = (
            // eslint-disable-next-line @typescript-eslint/no-shadow
            gl: WebGLRenderingContext,
            shaderType: number,
            source: string
        ) => {
            const shader = gl.createShader(shaderType);
            gl.shaderSource(shader!, source);
            gl.compileShader(shader!);
            if (!gl.getShaderParameter(shader!, gl.COMPILE_STATUS)) {
                console.error(
                    'Shader compile failed with: ' +
                        gl.getShaderInfoLog(shader!)
                );
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        // Vertex Shader
        const vsSource = `
            attribute vec4 coordinates;
            attribute vec4 color;
            varying lowp vec4 vColor;
            void main() {
                gl_Position = coordinates;
                vColor = color;
            }
        `;

        // Fragment Shader
        const fsSource = `
            varying lowp vec4 vColor;
            void main() {
                gl_FragColor = vColor;
            }
        `;

        // Kompilation Shader
        const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);

        if (!vertexShader || !fragmentShader) {
            return;
        }

        // Create Program
        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram!, vertexShader);
        gl.attachShader(shaderProgram!, fragmentShader);
        gl.linkProgram(shaderProgram!);

        if (!gl.getProgramParameter(shaderProgram!, gl.LINK_STATUS)) {
            console.error(
                'Unable to initialize the shader program: ' +
                    gl.getProgramInfoLog(shaderProgram!)
            );
            return;
        }

        gl.useProgram(shaderProgram);

        const a = 1.1;
        const b = 2.2;
        const c = 1;

        const { vertices, colors, indices } = createHornVertices(
            30,
            30,
            a,
            b,
            c
        );

        // Create and bind Buffer
        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(vertices),
            gl.STATIC_DRAW
        );

        const position = gl.getAttribLocation(shaderProgram!, 'coordinates');
        gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(position);

        // Create and bind color Buffer
        const colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(colors),
            gl.STATIC_DRAW
        );

        const colorLocation = gl.getAttribLocation(shaderProgram!, 'color');
        gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(colorLocation);

        // Create index
        const indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(
            gl.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(indices),
            gl.STATIC_DRAW
        );

        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.viewport(0, 0, canvas.width, canvas.height);

        if (areaVisible) {
            gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
        }
        if (gitterVisible) {
            gl.drawElements(gl.LINES, indices.length, gl.UNSIGNED_SHORT, 0);
        }

        function createHornVertices(
            latitudes: number,
            longitudes: number,
            a: number,
            b: number,
            c: number
        ) {
            const vertices: number[] = [];
            const colors: number[][] = [];
            const indices: number[] = [];

            for (let lat = 0; lat <= latitudes; lat++) {
                const u = lat / latitudes;
                for (let long = 0; long <= longitudes; long++) {
                    const v = (long / longitudes) * 2 * Math.PI - Math.PI;

                    const x = (a + u * Math.cos(v)) * Math.sin(b * Math.PI * u);
                    const y =
                        (a + u * Math.cos(v)) * Math.cos(b * Math.PI * u) +
                        c * u;
                    const z = u * Math.sin(v);

                    vertices.push(x, y, z);
                    colors.push([
                        0.5 + 0.5 * Math.cos(u),
                        0.5 + 0.5 * Math.sin(v),
                        0.5 + 0.5 * Math.cos(v),
                        1.0,
                    ]);
                }
            }

            for (let lat = 0; lat < latitudes; lat++) {
                for (let long = 0; long < longitudes; long++) {
                    const first = lat * (longitudes + 1) + long;
                    const second = first + longitudes + 1;
                    indices.push(first, second, first + 1);
                    indices.push(second, second + 1, first + 1);
                }
            }

            return {
                vertices: new Float32Array(vertices.map((el) => el * 0.3)),
                colors: new Float32Array(colors.flat()),
                indices: new Uint16Array(indices),
            };
        }
    }, [gitterVisible, areaVisible]);

    return <canvas ref={canvasRef} width='400' height='400' />;
};

export default Horn;
