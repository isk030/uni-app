/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useRef } from 'react';

export const Donut: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

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
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader!, vsSource);
        gl.compileShader(vertexShader!);

        // Fragment Shader
        const fsSource = `
            precision mediump float;
            varying lowp vec4 vColor;
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

        // Create vertex data for a torus
        const { vertices, colors, indices } = createTorusVertices(
            20,
            20,
            1.0,
            0.5
        );

        // Create and bind vertex buffer
        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const position = gl.getAttribLocation(shaderProgram!, 'coordinates');
        gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(position);

        // Create and bind color buffer
        const colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

        const color = gl.getAttribLocation(shaderProgram!, 'color');
        gl.vertexAttribPointer(color, 4, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(color);

        // Create and bind index buffer
        const indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

        // Draw the torus
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0); // Draw filled torus
        gl.drawElements(gl.LINES, indices.length, gl.UNSIGNED_SHORT, 0); // Draw lines

        function createTorusVertices(
            latBands: number,
            longBands: number,
            R: number,
            r: number
        ) {
            const vertices: number[] = [];
            const colors: number[] = []; // Added for color information
            const indices: number[] = [];

            for (let lat = 0; lat <= latBands; lat++) {
                const theta = (lat * 2 * Math.PI) / latBands;
                const sinTheta = Math.sin(theta);
                const cosTheta = Math.cos(theta);

                for (let long = 0; long <= longBands; long++) {
                    const phi = (long * 2 * Math.PI) / longBands;
                    const sinPhi = Math.sin(phi);
                    const cosPhi = Math.cos(phi);

                    const x = (R + r * cosPhi) * cosTheta;
                    const y = (R + r * cosPhi) * sinTheta;
                    const z = r * sinPhi;

                    vertices.push(x, y, z);

                    // Color based on the theta and phi values
                    colors.push(
                        0.5 + 0.5 * Math.cos(theta),
                        0.5 + 0.5 * Math.sin(phi),
                        0.5 + 0.5 * Math.cos(phi),
                        1.0
                    );
                }
            }

            for (let lat = 0; lat < latBands; lat++) {
                for (let long = 0; long < longBands; long++) {
                    const first = lat * (longBands + 1) + long;
                    const second = first + longBands + 1;
                    indices.push(first, second, first + 1);
                    indices.push(second, second + 1, first + 1);
                }
            }

            return {
                vertices: new Float32Array(vertices.map((el) => 0.6 * el)),
                colors: new Float32Array(colors),
                indices: new Uint16Array(indices),
            };
        }
    }, []);

    return <canvas ref={canvasRef} width={400} height={400} />;
};
