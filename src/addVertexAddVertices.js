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
}