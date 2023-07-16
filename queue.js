class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.size = 0;
    this.start = null;
    this.end = null;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.start) {
      this.start = newNode;
      this.end = newNode;
      this.size++;
      return newNode.val;
    }

    this.end.next = newNode;
    this.end = newNode;
    this.size++;
    return this.size;
  }
  dequeue() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      const node = this.start;
      this.start = null;
      this.end = null;
      this.size--;
      return node;
    }
    const dequeue = this.start;
    this.start = dequeue.next;
    dequeue.next = null;
    this.size--;
    return dequeue;
  }
}
