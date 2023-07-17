const Graph = require("../graphs");

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  describe("addVertex", () => {
    test("should add a new vertex to the graph", () => {
      graph.addVertex("A");
      expect(graph.adjacencyList).toEqual({ A: [] });
    });

    test('should return "Vertex Already Exists" if vertex already exists', () => {
      graph.addVertex("A");
      const result = graph.addVertex("A");
      expect(result).toBe("Vertex Already Exists");
    });
  });

  describe("addEdge", () => {
    test("should add an edge between two existing vertices", () => {
      graph.addVertex("A");
      graph.addVertex("B");
      graph.addEdge("A", "B");
      expect(graph.adjacencyList).toEqual({ A: ["B"], B: ["A"] });
    });

    test('should return "vertex 1 does not Exists" if vertex1 does not exist', () => {
      graph.addVertex("A");
      const result = graph.addEdge("B", "A");
      expect(result).toBe("vertex 1 does not Exists");
    });

    test('should return "vertex 2 does not Exists" if vertex2 does not exist', () => {
      graph.addVertex("A");
      const result = graph.addEdge("A", "B");
      expect(result).toBe("vertex 2 does not Exists");
    });
  });

  describe("removeEdge", () => {
    test("should remove the edge between two vertices", () => {
      graph.addVertex("A");
      graph.addVertex("B");
      graph.addEdge("A", "B");
      graph.removeEdge("A", "B");
      expect(graph.adjacencyList).toEqual({ A: [], B: [] });
    });
  });

  describe("removeVertex", () => {
    test("should remove a vertex and its associated edges", () => {
      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addEdge("A", "B");
      graph.addEdge("A", "C");
      graph.removeVertex("A");
      expect(graph.adjacencyList).toEqual({ B: [], C: [] });
    });
  });
    
    describe("DFSRecursive", () => {
      test("should perform depth-first search recursively starting from a given vertex", () => {
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addEdge("A", "B");
        graph.addEdge("B", "C");
        graph.addEdge("C", "D");

        const result = graph.DFSRecursive("A");
        expect(result).toEqual(["A", "B", "C", "D"]);
      });
    });

    describe("DFSIterative", () => {
      test("should perform depth-first search iteratively starting from a given vertex", () => {
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addEdge("A", "B");
        graph.addEdge("B", "C");
        graph.addEdge("C", "D");

        const result = graph.DFSIterative("A");
        expect(result).toEqual(["A", "B", "C", "D"]);
      });
    });

    describe("BFSIterative", () => {
      test("should perform breadth-first search iteratively starting from a given vertex", () => {
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "D");
        graph.addEdge("C", "D");

        const result = graph.BFSIterative("A");
        expect(result).toEqual(["A", "B", "C", "D"]);
      });
    });

    describe("BFSRecursive", () => {
      test("should perform breadth-first search recursively starting from a given vertex", () => {
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "D");
        graph.addEdge("C", "D");

        const result = graph.BFSRecursive("A");
        expect(result).toEqual(["A", "B", "C", "D"]);
      });
    });
});
