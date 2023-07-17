class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    let inserted = false;
    if (!this.root) {
      this.root = newNode;
      return this.root.val;
    } else {
      let current = this.root;
      while (!inserted) {
        if (current.val === val) {
          inserted = true;
          return "Duplicate value";
        }
        if (val > current.val) {
          if (current.right !== null) {
            current = current.right;
          } else {
            current.right = newNode;
            inserted = true;
          }
        } else if (val < current.val) {
          if (current.left !== null) {
            current = current.left;
          } else {
            current.left = newNode;
            inserted = true;
          }
        }
      }
    }
    return newNode.val;
  }

  find(nodeVal) {
    if (!this.root) {
      return undefined;
    }
    let current = this.root;
    while (true) {
      if (current.val === nodeVal) {
        return current;
      }
      if (nodeVal > current.val) {
        if (current.right !== null) {
          current = current.right;
        } else {
          return "Not found";
        }
      } else if (nodeVal < current.val) {
        if (current.left !== null) {
          current = current.left;
        } else {
          return "Not found";
        }
      }
    }
  }
  BFS() {
    const data = [];
    const queue = [];
    if (!this.root) {
      return [];
    }
    let current = this.root;
    queue.push(current);
    while (queue.length !== 0) {
      if (queue[0].left !== null) {
        queue.push(queue[0].left);
      }
      if (queue[0].right !== null) {
        queue.push(queue[0].right);
      }

      data.push(queue[0].val);
      queue.shift();
    }
    // data.forEach((elem) => {
    //   console.log(elem);
    // });
    return data;
  }
  BFSColt() {
    const data = [];
    const queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  printTree(node, prefix = "", isLeft = true) {
    if (node !== null) {
      console.log(prefix + (isLeft ? "├── " : "└──") + node.val);
      const indent = prefix + (isLeft ? "│   " : "    ");
      this.printTree(node.left, indent, true);
      this.printTree(node.right, indent, false);
    } else {
      console.log(prefix + "└──" + null);
    }
  }

  // BFSWithQueue() {
  //   // keep in mind that your queue implementation returns node so, enqueue and dequeue will make nodes nested queueTypeNode{BstTypeNode}
  //   // that is why node.val.val is written to access bst node's value
  //   const data = [];
  //   const queue = new Q();
  //   let node = null;
  //   queue.enqueue(this.root);

  //   while (queue.size) {
  //     node = queue.dequeue();
  //     data.push(node.val.val);
  //     if (node.val.left) {
  //       queue.enqueue(node.val.left);
  //     }
  //     if (node.val.right) {
  //       queue.enqueue(node.val.right);
  //     }
  //   }
  //   data.forEach((elem) => {
  //     console.log(elem);
  //   });
  // }

  getTreeHeight(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = this.getTreeHeight(node.left);
    const rightHeight = this.getTreeHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  DFSInOrder() {
    if (!this.root) {
      return undefined;
    }
    const visited = [];
    let current = this.root;
    const DFSInOrderHelper = (node) => {
      if (node.left) DFSInOrderHelper(node.left);
      visited.push(node.val);
      if (node.right) DFSInOrderHelper(node.right);
    };
    DFSInOrderHelper(current);
    return visited;
  }

  DFSPreOrder() {
    if (!this.root) {
      return undefined;
    }
    const visited = [];
    let current = this.root;
    const DFSPreOrderHelper = (node) => {
      visited.push(node.val);
      if (node.left) DFSPreOrderHelper(node.left);
      if (node.right) DFSPreOrderHelper(node.right);
    };
    DFSPreOrderHelper(current);
    return visited;
  }
  DFSPostOrder() {
    if (!this.root) {
      return undefined;
    }
    const visited = [];
    let current = this.root;
    const DFSPostOrderHelper = (node) => {
      if (node.left) DFSPostOrderHelper(node.left);
      if (node.right) DFSPostOrderHelper(node.right);
      visited.push(node.val);
    };
    DFSPostOrderHelper(current);
    return visited;
  }

  delete(nodeVal) {
    if (!this.root) {
      return undefined;
    }

    let current = this.root;
    let prev = null;
    while (true) {
      //if nodeVal matches current.val
      if (current.val === nodeVal) {
        // Case:1 - node to be deleted is a leaf node
        if (current.right === null && current.left === null) {
          prev.val > current.val ? (prev.left = null) : (prev.right = null);
          return current.val;
        }

        // Case:2 - node to be deleted has one child
        if (current.right === null) {
          const deleted = current.val;
          current.val = current.left.val;
          current.left = null;
          return deleted;
        } else if (current.left === null) {
          const deleted = current.val;
          current.val = current.right.val;
          current.right = null;
          return deleted;
        }

        // Case:3 - node to be deleted has two child
        if (current.right !== null && current.left !== null) {
          let prevOfSuccessor = null;
          let currentTemp = current;
          currentTemp = currentTemp.right;
          while (currentTemp.left !== null) {
            prevOfSuccessor = currentTemp;
            currentTemp = currentTemp.left;
          }
          let deleted = current.val;
          current.val = currentTemp.val;
          prevOfSuccessor.left = currentTemp.right;
          return deleted;
        }
      }

      // find node logic
      if (nodeVal > current.val) {
        if (current.right !== null) {
          prev = current;
          current = current.right;
        } else {
          return false;
        }
      }
      if (nodeVal < current.val) {
        if (current.left !== null) {
          prev = current;
          current = current.left;
        } else {
          return false;
        }
      }
    }
  }
}

module.exports = BST;

// const tree = new BST();
// tree.insert(41);
// tree.insert(20);
// tree.insert(65);
// tree.insert(11);
// tree.insert(29);
// tree.insert(12);
// tree.insert(32);
// tree.insert(50);
// tree.insert(91);
// tree.insert(99);
// tree.insert(72);
// tree.insert(68);

// tree.printTree(tree.root);

// Test Delete - Case:1 - node to be deleted is a leaf node
// console.log(tree.delete(12));

// Test Delete - Case:2 - node to be deleted has one child
// console.log(tree.delete(11));

// Test Delete - Case:3 - node to be deleted has two child
// console.log(tree.delete(41));
// console.log();
// tree.printTree(tree.root);

// tree.BFS();
// tree.BFSWithQueue();
// console.log(tree.BFSColt());

// console.log(tree.getTreeHeight(tree.root));

// console.log(tree.DFSPreOrder());
// console.log(tree.DFSInOrder());
// console.log(tree.DFSPostOrder());
