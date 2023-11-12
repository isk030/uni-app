/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useRef } from 'react';
import { FigureProps } from './donut';

export const AntisymmetricTorus: React.FC<FigureProps> = ({
    gitterVisible,
    areaVisible,
}) => {
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
            attribute vec4 coordinates;
            attribute vec4 color;
            varying lowp vec4 vColor;
            void main() {
                gl_Position = coordinates;
                vColor = color;
            }
        `;

        const fsSource = `
            varying lowp vec4 vColor;
            void main() {
                gl_FragColor = vColor;
            }
        `;

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader!, vsSource);
        gl.compileShader(vertexShader!);

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader!, fsSource);
        gl.compileShader(fragmentShader!);

        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram!, vertexShader!);
        gl.attachShader(shaderProgram!, fragmentShader!);
        gl.linkProgram(shaderProgram!);
        gl.useProgram(shaderProgram);

        const R = 0.7;
        const r = 0.1;
        const a = 1;

        const { vertices, colors, indices } = createAntisymmetricTorusVertices(
            30,
            30,
            R,
            r,
            a
        );

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

        const colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(colors.flat()),
            gl.STATIC_DRAW
        );

        const colorLocation = gl.getAttribLocation(shaderProgram!, 'color');
        gl.enableVertexAttribArray(colorLocation);
        gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 0, 0);

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
            gl.drawElements(gl.LINE_LOOP, indices.length, gl.UNSIGNED_SHORT, 0);
        }

        function createAntisymmetricTorusVertices(
            latBands: number,
            longBands: number,
            R: number,
            r: number,
            a: number
        ) {
            const vertices: number[] = [];
            const colors: number[][] = [];
            const indices: number[] = [];

            for (let lat = 0; lat <= latBands; lat++) {
                const u = (lat / latBands) * 2 * Math.PI;
                for (let long = 0; long <= longBands; long++) {
                    const v = (long / longBands) * 2 * Math.PI;

                    const x =
                        (R + r * Math.cos(v) * (a + Math.sin(u))) * Math.cos(u);
                    const y =
                        (R + r * Math.cos(v) * (a + Math.sin(u))) * Math.sin(u);
                    const z = r * Math.sin(v) * (a + Math.sin(u));

                    vertices.push(x, y, z);

                    colors.push([
                        0.5 + 0.5 * Math.cos(u),
                        0.5 + 0.5 * Math.sin(v),
                        0.5 + 0.5 * Math.cos(v),
                        1.0,
                    ]);
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
                vertices,
                colors,
                indices,
            };
        }
    }, [gitterVisible, areaVisible]);

    return <canvas ref={canvasRef} width='400' height='400' />;
};
