import React, { useEffect, useRef } from 'react';

const SolutionTwo: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas?.getContext('webgl');

        if (!gl) {
            console.error('WebGL is not supported in your browser.');
            return;
        }

        // Anzahl der Ecken im Polygon (zum Beispiel 35 für einen Stern)
        const numEdges = 35;

        const vertices = new Float32Array(numEdges * 2);

        for (let i = 0; i < numEdges; i++) {
            const angle = (i / numEdges) * 2 * Math.PI;
            const radius = i % 2 === 0 ? 0.5 : 0.2; // Abwechselnde Radien für Zacken
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            vertices[i * 2] = x;
            vertices[i * 2 + 1] = y;
        }

        // Vertex- und Fragment-Shader-Code
        const vertexShaderSource = `
      attribute vec2 coordinates;
      void main(void) {
        gl_Position = vec4(coordinates, 0.0, 1.0);
      }
    `;

        const fragmentShaderSource = `
      void main(void) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Linienfarbe (in diesem Fall rot)
      }
    `;

        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        // Erstellen und kompilieren Sie Shader
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader!, vertexShaderSource);
        gl.compileShader(vertexShader!);

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader!, fragmentShaderSource);
        gl.compileShader(fragmentShader!);

        // Erstellen und verwenden Sie ein Shader-Programm
        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram!, vertexShader!);
        gl.attachShader(shaderProgram!, fragmentShader!);
        gl.linkProgram(shaderProgram!);
        gl.useProgram(shaderProgram);

        // Verknüpfen Sie das Vertex-Attribut "coordinates" mit dem Buffer
        const coord = gl.getAttribLocation(shaderProgram!, 'coordinates');
        gl.enableVertexAttribArray(coord);
        gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);

        // Zeichnen Sie das Polygon als Linien
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.LINE_LOOP, 0, numEdges); // Polygon mit 35 Ecken als Linien
    }, []);

    return <canvas ref={canvasRef} width={800} height={600}></canvas>;
};

export default SolutionTwo;
