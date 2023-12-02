const torus = (function () {
    function createVertexData() {
        const n = 32;
        const m = 32;

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
        const r = 0.3;
        const R = 0.7;
        // Counter for entries in index array.
        let iLines = 0;
        let iTris = 0;

        // Loop angle u.
        for (let i = 0, u = 0; i <= n; i++, u += du) {
            // Loop angle v.
            for (let j = 0, v = 0; j <= m; j++, v += dv) {
                const iVertex = i * (m + 1) + j;

                let x = (R + r * Math.cos(u)) * Math.cos(v);
                let y = (R + r * Math.cos(u)) * Math.sin(v);
                let z = r * Math.sin(u);

                x += 0;
                y += 0;
                z += 0;

                // Set vertex positions.
                vertices[iVertex * 3] = x;
                vertices[iVertex * 3 + 1] = y;
                vertices[iVertex * 3 + 2] = z;

                // Calc and set normals.
                const nx = Math.cos(u) * Math.cos(v);
                const ny = Math.cos(u) * Math.sin(v);
                const nz = Math.sin(u);
                normals[iVertex * 3] = nx;
                normals[iVertex * 3 + 1] = ny;
                normals[iVertex * 3 + 2] = nz;

                // if(i>14){
                // continue;
                // }

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

export default torus;
