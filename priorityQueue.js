// priorityQueue using maxHeap

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class priorityQueue {
  constructor() {
    this.list = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    if (this.list.length === 0) {
      this.list.push(node);
      return this;
    }

    this.list.push(node);
    let indexVal = this.list.length - 1;
    let indexParent = Math.floor(indexVal / 2);
    while (this.list[indexVal].priority > this.list[indexParent].priority) {
      [this.list[indexVal], this.list[indexParent]] = [
        this.list[indexParent],
        this.list[indexVal],
      ];
      indexVal = indexParent;
      indexParent = Math.floor(indexVal / 2);
    }
    return this;
  }

  dequeue() {
    if (!this.list.length) {
      return undefined;
    }
    if (this.list.length === 1) {
      return this.list.shift();
    }

    let start = this.list[0];
    let end = this.list[this.list.length - 1];
    this.list[0] = end;
    this.list[this.list.length - 1] = start;
    let deleted = this.list.pop();
    this.sinkDown();
    return deleted;
  }

  sinkDown() {
    let index = 0;
    const length = this.list.length;
    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = leftChildIndex + 1;
      let maxIndex = index;

      if (
        leftChildIndex < length &&
        this.list[leftChildIndex].priority > this.list[maxIndex].priority
      ) {
        maxIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.list[rightChildIndex].priority > this.list[maxIndex].priority
      ) {
        maxIndex = rightChildIndex;
      }

      if (maxIndex === index) {
        return;
      }

      [this.list[index], this.list[maxIndex]] = [
        this.list[maxIndex],
        this.list[index],
      ];
      index = maxIndex;
    }
  }
}

const pq = new priorityQueue();
console.log(pq.enqueue(10, 10));
console.log(pq.enqueue(10, 20));
console.log(pq.enqueue(10, 30));
console.log(pq.enqueue(10, 40));
console.log(pq.enqueue(10, 50));
console.log(pq.enqueue(10, 1));
console.log(pq.enqueue(10, 6));
console.log(pq.enqueue(10, 9));
console.log(pq.enqueue(10, 1));
pq.dequeue();
console.log(pq);
