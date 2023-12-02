const snail = (function () {
    function createVertexData() {
        const n = 32; // Anzahl der Segmente entlang der Länge der Schnecke
        const m = 32; // Anzahl der Segmente um den Umfang der Schnecke

        // Positions.
        this.vertices = new Float32Array(3 * (n + 1) * (m + 1));
        const vertices = this.vertices;
        // Normals.
        this.normals = new Float32Array(3 * (n + 1) * (m + 1));
        const normals = this.normals;
        // Index data.
        this.indicesLines = new Uint16Array(2 * 2 * n * m);
        const indicesLines = this.indicesLines;
        this.indicesTris = new Uint16Array(3 * 2 * n * m);
        const indicesTris = this.indicesTris;

        const du = (2 * Math.PI) / n;
        const dv = (2 * Math.PI) / m;
        // Counter for entries in index array.
        let iLines = 0;
        let iTris = 0;

        // Loop angle u.
        for (let i = 0, u = 0; i <= n; i++, u += du) {
            // Loop angle v.
            for (let j = 0, v = 0; j <= m; j++, v += dv) {
                const iVertex = i * (m + 1) + j;

                const a = 1; // Anpassung für die Größe der Schnecke
                const b = 6; // Anpassung für die Drehungen der Schnecke

                // Schneckenformel entsprechend dem Vorbild
                let x = a * Math.cos(u) * (1 + Math.cos(v));
                let y = a * Math.sin(u) * (1 + Math.cos(v));
                let z = b * u + a * Math.sin(v);

                // Set vertex positions.
                vertices[iVertex * 3] = x;
                vertices[iVertex * 3 + 1] = y;
                vertices[iVertex * 3 + 2] = z;

                // Calc and set normals.
                // Einfache Annäherung für Normale
                normals[iVertex * 3] = x;
                normals[iVertex * 3 + 1] = y;
                normals[iVertex * 3 + 2] = z;

                // Set index.
                // Line on beam.
                if (j > 0 && i > 0) {
                    indicesLines[iLines++] = iVertex - 1;
                    indicesLines[iLines++] = iVertex;
                }
                // Line on ring.
                if (j > 0 && i > 0) {
                    indicesLines[iLines++] = iVertex - (m + 1);
                    indicesLines[iLines++] = iVertex;
                }

                // Set index.
                // Two Triangles.
                if (j > 0 && i > 0) {
                    indicesTris[iTris++] = iVertex;
                    indicesTris[iTris++] = iVertex - 1;
                    indicesTris[iTris++] = iVertex - (m + 1);
                    //
                    indicesTris[iTris++] = iVertex - 1;
                    indicesTris[iTris++] = iVertex - (m + 1) - 1;
                    indicesTris[iTris++] = iVertex - (m + 1);
                }
            }
        }
    }

    return {
        createVertexData: createVertexData,
    };
})();

export default snail;
