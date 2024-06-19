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
}