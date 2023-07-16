class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.top = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.top) {
      this.top = newNode;
      this.size++;
      return this.size;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size === 0) {
      return undefined;
    } else if (this.size === 1) {
      const node = this.top;
      this.top = null;
      this.size--;
      return node.val;
    }
    const node = this.top;
    this.top = node.next;
    node.next = null;
    this.size--;
    return node.val;
  }
  peek() {
    if (this.size === 0) {
      return undefined;
    }
    return this.top.val;
  }
  printStack() {
    if (!this.top) {
      return undefined;
    }
    let current = this.top;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

module.exports = Stack;
