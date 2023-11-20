var sphere = (function () {
    function createVertexData(recursionLevel) {
        var t = (1.0 + Math.sqrt(5.0)) / 2.0;

        var vertices = [
            -1,
            t,
            0,
            1,
            t,
            0,
            -1,
            -t,
            0,
            1,
            -t,
            0,
            0,
            -1,
            t,
            0,
            1,
            t,
            0,
            -1,
            -t,
            0,
            1,
            -t,
            t,
            0,
            -1,
            t,
            0,
            1,
            -t,
            0,
            -1,
            -t,
            0,
            1,
        ];

        for (let i = 0; i < vertices.length; i += 3) {
            var x = vertices[i];
            var y = vertices[i + 1];
            var z = vertices[i + 2];

            var length = Math.sqrt(x * x + y * y + z * z);
            vertices[i] /= length;
            vertices[i + 1] /= length;
            vertices[i + 2] /= length;
        }

        var indices = [
            0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4,
            11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3,
            8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
        ];

        // console.debug('Recursion Level:', recursionLevel);
        var result = subdivide(vertices, indices, recursionLevel);
        // console.debug(result);

        var indicesTris = [];
        for (let i = 0; i < result.indices.length; i += 3) {
            indicesTris.push(
                result.indices[i],
                result.indices[i + 1],
                result.indices[i + 2]
            );
        }

        var indicesLines = [];
        var edgeSet = new Set();

        function addEdge(a, b) {
            var edge = a < b ? a + '_' + b : b + '_' + a;
            if (!edgeSet.has(edge)) {
                edgeSet.add(edge);
                indicesLines.push(a, b);
            }
        }

        for (let i = 0; i < result.indices.length; i += 3) {
            var a = result.indices[i];
            var b = result.indices[i + 1];
            var c = result.indices[i + 2];

            // Add edges for each face
            addEdge(a, b);
            addEdge(b, c);
            addEdge(c, a);
        }

        this.vertices = new Float32Array(result.vertices);
        this.normals = new Float32Array(result.vertices);
        this.indicesTris = new Uint16Array(indicesTris);
        this.indicesLines = new Uint16Array(indicesLines);
    }

    return {
        createVertexData: createVertexData,
    };
})();

function subdivide(vertices, indices, recursionLevel) {
    if (recursionLevel === 0) {
        return { vertices, indices };
    }

    var midPointCache = new Map();
    var newVertices = vertices.slice();
    var newIndices = [];

    var getMiddlePoint = (p1, p2) => {
        if (p1 > p2) {
            [p1, p2] = [p2, p1];
        }

        var key = `${p1}-${p2}`;
        if (midPointCache.has(key)) {
            return midPointCache.get(key);
        }

        var x = (vertices[3 * p1] + vertices[3 * p2]) / 2;
        var y = (vertices[3 * p1 + 1] + vertices[3 * p2 + 1]) / 2;
        var z = (vertices[3 * p1 + 2] + vertices[3 * p2 + 2]) / 2;
        var length = Math.sqrt(x * x + y * y + z * z);
        newVertices.push(x / length, y / length, z / length);

        var newIndex = newVertices.length / 3 - 1;
        midPointCache.set(key, newIndex);
        return newIndex;
    };

    for (var i = 0; i < indices.length; i += 3) {
        var v1 = indices[i];
        var v2 = indices[i + 1];
        var v3 = indices[i + 2];

        var a = getMiddlePoint(v1, v2);
        var b = getMiddlePoint(v2, v3);
        var c = getMiddlePoint(v3, v1);

        newIndices.push(v1, a, c, v2, b, a, v3, c, b, a, b, c);
    }

    return subdivide(newVertices, newIndices, recursionLevel - 1);
}

export default sphere;
