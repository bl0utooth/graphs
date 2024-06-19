class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addVerticies(verticies) {
        verticies.forEach(vertex => this.addVertex(vertex))
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1)
        this.addVertex(vertex2)

        if (!this.adjacencyList[vertex1].include(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2)
        }

        if (!this.adjacencyList[vertex2].includes(vertex1)) {
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                v => v !== vertex2
            )
        }

        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                v => v !== vertex1
            )
        }
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return
        
        while (this.adjacencyList[vertex].length) {
            const adjcentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjcentVertex)
        }

        delete this.adjacencyList[vertex]
    }

    depthFirst(start) {
        const result = []
        const seen = {}
        const adjacencyList = this.adjacencyList

        (function dfs(vertex) {
            if (!vertex) return null;
            seen[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if (!seen[neighbor]) {
                    return dfs(neighbor)
                }
            })
        })(start)

        return result;
    }

    breadthFirst(start) {
        const queue = [start]
        const result = []
        const seen = {}
        seen[start] = true

        while (queue.length) {
            const vertex = queue.shift()
            result.push(vertex)

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!seen[neighbor]) {
                    seen[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }

        return result
    }
}