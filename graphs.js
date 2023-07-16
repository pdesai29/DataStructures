// UNDIRECTED,UNWEIGHTED GRAPH IMPLEMENTATION
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    else return "Vertex Already Exists";
    return this;
  }
  addEdge(v1, v2) {
    if (
      this.adjacencyList[v1] &&
      this.adjacencyList[v2] &&
      !this.adjacencyList[v1].includes(v2)
    ) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
      return this;
    } else {
      return v1 ? "vertex 2 does not Exists" : "vertex 1 does not Exists";
    }
  }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      // one way to remove item from array
      //   let indexOfv2 = this.adjacencyList[v1].indexOf(v2);
      //   let indexOfv1 = this.adjacencyList[v2].indexOf(v1);
      //   this.adjacencyList[v1].splice(indexOfv2, 1);
      //   this.adjacencyList[v2].splice(indexOfv1, 1);
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
        (val) => val !== v2
      );
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((val) => {
        if (val !== v1) {
          return val;
        }
      });
      return this;
    }
  }
  removeVertex(v) {
    let deleted = this.adjacencyList[v];
    // delete this.adjacencyList[v];

    // while (deleted.length !== 0) {
    //   let length = deleted.length;
    //   let connection = deleted[length - 1];
    //   this.adjacencyList[connection] = this.adjacencyList[connection].filter(
    //     (val) => val !== v
    //   );
    //   deleted.pop();
    // }
    // return this;

    while (deleted.length !== 0) {
      let length = deleted.length;
      let connection = deleted[length - 1];
      this.removeEdge(v, connection);
      deleted.pop();
    }
    delete this.adjacencyList[v];
    return this;
  }
  DFSRecursive(vertex) {
    // The result may vary on which order you connected graph (inserted edges) or inserted vertex
    let result = [];
    let visited = {};
    function DFSRecursiveHelper(vertex) {
      if (!vertex) {
        return null;
      }
      visited[vertex] = true;
      result.push(vertex);
      // Three ways to solve problem of 'this'
      // 1. make helper arrow function
      // 2. use bind,apply or call
      // 3. copy this.adjacencyList in DFSRecursive // const adjacencyList=this.adjacencyList
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (/*!(neighbor in visited)*/ !visited[neighbor]) {
          return DFSRecursiveHelper.bind(this)(neighbor);
        }
      });
    }
    DFSRecursiveHelper.bind(this)(vertex);
    return result;
  }
  DFSIterative(vertex) {
    let s = [];
    let visited = {};
    let result = [];
    s.push(vertex);
    while (s.length !== 0) {
      const v = s.pop();
      if (!visited[v]) {
        result.push(v);
        visited[v] = true;
        this.adjacencyList[v].forEach((neighbor) => {
          s.push(neighbor);
        });
      }
    }
    // console.log(visited);
    return result;
  }
  BFSIterative(vertex) {
    let visited = {};
    let q = [];
    let result = [];
    q.push(vertex);
    let currentVertex;
    while (q.length !== 0) {
      //   console.log(q);
      currentVertex = q.shift();
      if (!visited[currentVertex]) {
        result.push(currentVertex);
        visited[currentVertex] = true;
        this.adjacencyList[currentVertex].forEach((neighbor) => {
          q.push(neighbor);
        });
      }
    }
    return result;
  }
  BFSRecursive(vertex) {
    let visited = {};
    let result = [];
    let q = [];
    let adjacencyList = this.adjacencyList;
    function BFSRecursiveHelper(node) {
      //   console.log(node);
      if (!node) return null;
      if (!(q.includes(node) || node in visited)) {
        q.push(node);
      }
      visited[node] = true;
      result.push(node);
      adjacencyList[node].forEach((neighbor) => {
        if (!(visited[neighbor] || q.includes(neighbor))) {
          q.push(neighbor);
        }
      });
      q.shift();
      return BFSRecursiveHelper(q[0]);
    }
    BFSRecursiveHelper(vertex);
    return result;
  }
}
const g = new Graph();
// console.log(g.addVertex("Tokyo"));
// console.log(g.addVertex("Tokyo"));
// console.log(g.addVertex("India"));
// console.log(g.addVertex("USA"));
// console.log(g.addVertex("Germany"));
// console.log(g.addEdge("Tokyo", "India"));
// console.log(g.addEdge("Tokyo", "India"));
// console.log(g.addEdge("Tokyo", "USA"));
// console.log(g.addEdge("USA", "India"));
// console.log(g.addEdge("Canada", "India"));
// console.log(g.addEdge("Germany", "USA"));
// // console.log(g.removeEdge("Tokyo", "India"));
// console.log(g.removeVertex("Tokyo"));

console.log(g.addVertex("A"));
console.log(g.addVertex("B"));
console.log(g.addVertex("C"));
console.log(g.addVertex("D"));
console.log(g.addVertex("E"));
console.log(g.addVertex("F"));
console.log(g.addEdge("A", "B"));
console.log(g.addEdge("A", "C"));
console.log(g.addEdge("D", "B"));
console.log(g.addEdge("D", "F"));
console.log(g.addEdge("E", "F"));
console.log(g.addEdge("D", "E"));
console.log(g.addEdge("C", "E"));
console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFSRecursive("A"));
console.log(g.BFSIterative("A"));
