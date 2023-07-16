// p queue using minHeap
// class PriorityQueue {
//   constructor() {
//     this.list = [];
//   }

//   enqueue(val, p) {
//     let list = this.list;
//     if (!list.length) {
//       list.push({ val, p });
//       return;
//     }
//     //bubble up logic
//     list.push({ val, p });
//     let length = list.length;
//     let current = length - 1;
//     let parent = Math.floor(current / 2);
//     while (list[current].p < list[parent].p) {
//       [list[parent], list[current]] = [list[current], list[parent]];
//       current = parent;
//       parent = Math.floor(current / 2);
//     }
//   }
//   dequeue() {
//     let list = this.list;
//     if (list.length === 0) {
//       return undefined;
//     }
//     [list[0], list[list.length - 1]] = [list[list.length - 1], list[0]];
//     let deleted = list.pop();
//     let current = 0;
//     let leftChild = current * 2 + 1;
//     let rightChild = current * 2 + 2;
//     let minIndex;

//     //sinkDown logic
//     while (leftChild < list.length && rightChild < list.length) {
//       if (list[current].p > Math.min(list[leftChild].p, list[rightChild].p)) {
//         minIndex =
//           list[leftChild].p === Math.min(list[leftChild].p, list[rightChild].p)
//             ? leftChild
//             : rightChild;
//         [list[current], list[minIndex]] = [list[minIndex], list[current]];
//         current = minIndex;
//         leftChild = current * 2 + 1;
//         rightChild = current * 2 + 2;
//       }
//     }
//     if (list[leftChild]) {
//       if (list[current].p > list[leftChild].p) {
//         [list[current], list[leftChild]] = [list[leftChild], list[current]];
//       }
//     }
//     return deleted;
//   }
// }

class PriorityQueue {
  constructor() {
    this.list = [];
  }
  enqueue(val, p) {
    this.list.push({ val, p });
    this.sort();
  }
  dequeue() {
    return this.list.shift();
  }
  sort() {
    this.list.sort((a, b) => a.p - b.p);
  }
}
// weighted undirected g implementation
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) {
      this.adjacencyList[vertexName] = [];
    } else {
      return "vertex already exists";
    }
  }

  addEdge(v1, v2, w) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({ node: v2, weight: w });
      this.adjacencyList[v2].push({ node: v1, weight: w });
    }
  }
  shortestPath(start, finish) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
    for (const key in this.adjacencyList) {
      key === start ? (distances[key] = 0) : (distances[key] = Infinity);
      previous[key] = null;
    }
    for (const key in distances) {
      pq.enqueue(key, distances[key]);
    }

    while (pq.list.length) {
      let vertex = pq.dequeue().val;
      if (vertex === finish) {
        // console.log(distances);
        // console.log(previous);
        const path = [];
        path.unshift(vertex);
        let nextVertex = previous[vertex];
        while (nextVertex) {
          path.unshift(nextVertex);
          nextVertex = previous[nextVertex];
        }
        return path;
      }
      if (vertex || distances[vertex] !== Infinity) {
        for (const neighbor in this.adjacencyList[vertex]) {
          let nextNode = this.adjacencyList[vertex][neighbor];
          let candidate = distances[vertex] + nextNode.weight;

          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = vertex;
            pq.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
console.log(g.shortestPath("A", "E"));
// const pq = new PriorityQueue();
// console.log(pq.enqueue("A", 50));
// console.log(pq.enqueue("B", 40));
// console.log(pq.enqueue("C", 30));
// console.log(pq.enqueue("D", 20));
// console.log(pq.enqueue("E", 10));
// console.log(pq.enqueue("F", 5));
