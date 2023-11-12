import { useEffect, useRef } from 'react';

function SolutionThree() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas?.getContext('webgl');

        if (!gl) {
            console.error('WebGL is not supported.');
            return;
        }

        const vertices: number[] = [
            -0.5, 0.5, -0.8, 1, -0.2, 0.5, -0.2, 0.5, 0.2, 0.5, 0.0, 0.0, 0.5,
            0.5, 0.8, 1, 0.2, 0.5, 0.0, 0.0, 0.2, 0.5, 0.5, 0.5, 0.0, 0.0, -0.5,
            0.5, -0.2, 0.5, 0.0, 0.0, 0.5, -0.5, 0.2, 0.0, 0.0, 0.0, -0.5, -0.5,
            -0.2, 0.0, 0.5, -0.5, 0.0, -0.5, 0.2, -0.2, 0.0, -0.5, -0.5, -0.5,
            -0.2, -0.2, 0.2, 0.0, 0.5, -0.1, 0.3, -0.2, -0.2, 0.0, -0.3, -0.2,
            -0.5, -0.1,
        ];

        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(vertices),
            gl.STATIC_DRAW
        );

        const vertexShaderSource = `
          attribute vec2 coordinates;
          varying vec4 fragColor;
          void main(void) {
            gl_Position = vec4(coordinates, 0.0, 1.0);
            fragColor = vec4(1.0, 0.0, 0.0, 1.0);
          }
        `;

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader!, vertexShaderSource);
        gl.compileShader(vertexShader!);

        const fragmentShaderSource = `
          precision mediump float;
          varying vec4 fragColor;
          void main(void) {
            float gradient = gl_FragCoord.y / 400.0; // Höhe des Canvas
            gl_FragColor = mix(fragColor, vec4(1.0, 1.0, 1.0, 1.0), gradient);
          }
        `;

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader!, fragmentShaderSource);
        gl.compileShader(fragmentShader!);

        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram!, vertexShader!);
        gl.attachShader(shaderProgram!, fragmentShader!);
        gl.linkProgram(shaderProgram!);
        gl.useProgram(shaderProgram);

        const coord = gl.getAttribLocation(shaderProgram!, 'coordinates');
        gl.vertexAttribPointer(
            coord,
            2,
            gl.FLOAT,
            false,
            2 * Float32Array.BYTES_PER_ELEMENT,
            0
        );
        gl.enableVertexAttribArray(coord);

        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 2);
    }, []);

    return <canvas ref={canvasRef} width={800} height={800} />;
}

export default SolutionThree;
