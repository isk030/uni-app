/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useRef } from 'react';

export const Custom: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        const vsSource = `
            attribute vec3 coordinates;
            void main() {
                gl_Position = vec4(coordinates, 1.0);
            }
        `;

        // Fragment Shader
        const fsSource = `
            precision mediump float;
            void main() {
                gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            }
        `;

        // Erzeugen und Kompilieren der Shaders
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader!, vsSource);
        gl.compileShader(vertexShader!);

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader!, fsSource);
        gl.compileShader(fragmentShader!);

        // Erstellen des Shader-Programms
        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram!, vertexShader!);
        gl.attachShader(shaderProgram!, fragmentShader!);
        gl.linkProgram(shaderProgram!);
        gl.useProgram(shaderProgram);

        // Erzeugen der Vertices für die Fish Surface
        const { vertices, indices } = createFishSurfaceVertices(20, 20);

        // Erstellen des Vertex Buffer
        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        // Verbinden des Buffer mit dem Shader-Programm
        const coord = gl.getAttribLocation(shaderProgram!, 'coordinates');
        gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(coord);

        // Erstellen des Index Buffer
        const indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

        // Zeichnen der Fläche
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.drawElements(gl.LINES, indices.length, gl.UNSIGNED_SHORT, 0);

        function createFishSurfaceVertices(
            latBands: number,
            longBands: number
        ) {
            const vertices: number[] = [];
            const indices: number[] = [];

            for (let lat = 0; lat <= latBands; lat++) {
                const u = (lat / latBands) * Math.PI; // u von 0 bis π
                for (let long = 0; long <= longBands; long++) {
                    const v = (long / longBands) * 2 * Math.PI; // v von 0 bis 2π

                    // Berechnung der Koordinaten
                    const x =
                        ((Math.cos(u) - Math.cos(2 * u)) * Math.cos(v)) / 4;
                    const y =
                        ((Math.sin(u) - Math.sin(2 * u)) * Math.sin(v)) / 4;
                    const z = Math.cos(u);

                    vertices.push(x, y, z);
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
                vertices: new Float32Array(vertices),
                indices: new Uint16Array(indices),
            };
        }
    }, []);

    return <canvas ref={canvasRef} width='400' height='400' />;
};
