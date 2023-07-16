class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }

  pop() {
    if (!this.length) {
      return undefined;
    } else {
      let popped = this.tail;
      if (this.length === 1) {
        this.tail = null;
        this.head = null;
        popped.prev = null;
        this.length--;
        return popped;
      }
      this.tail = this.tail.prev;
      this.tail.next = null;
      popped.prev = null;
      this.length--;
      return popped;
    }
  }

  shift() {
    if (!this.head) return undefined;
    const shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return shifted;
    }
    this.head = shifted.next;
    this.head.prev = null;
    this.length--;
    shifted.next = null;
    return shifted;
  }

  unshift(val) {
    if (!this.head) {
      return this.push(val);
    } else {
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this;
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current;
    let counter;
    if (index >= Math.floor(this.length / 2)) {
      counter = this.length;
      current = this.tail;
      while (counter !== index + 1) {
        counter--;
        current = current.prev;
      }
    } else {
      current = this.head;
      counter = 0;
      while (counter !== index) {
        counter++;
        current = current.next;
      }
    }
    return current;
  }
  set(index, val) {
    const node = this.get(index);
    node ? (node.val = val) : node;
    return node ? true : false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) {
      this.unshift(val);
      return true;
    } else if (index == this.length) {
      this.push(val);
      return true;
    } else {
      const foundNode = this.get(index);
      if (foundNode) {
        const newNode = new Node(val);
        newNode.next = foundNode;
        newNode.prev = foundNode.prev;
        newNode.prev.next = newNode;
        foundNode.prev = newNode;
        this.length++;
        return true;
      } else {
        return false;
      }
    }
  }
  printList() {
    let s = "";
    let current = this.head;
    while (current !== null) {
      s += current.val + " --> ";
      current = current.next;
    }
    console.log(s + "null");
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.shift();
    }
    if (index === this.length) {
      return !!this.pop();
    }
    const foundNode = this.get(index);
    const prev = foundNode.prev;
    const next = foundNode.next;
    prev.next = next;
    next.prev = prev;
    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return true;
  }
  printReverseList() {
    let current = this.tail;
    let s = "";
    while (current !== null) {
      s += current.val + " --> ";
      current = current.prev;
    }
    console.log(s + "null");
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;
    let newTail = this.head;
    let newHead = this.tail;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }

    this.head = newHead;
    this.tail = newTail;
    return this;
  }
}

const list = new doublyLinkedList();

console.log(list.push(10));
console.log(list.push(20));
console.log(list.push(30));
console.log(list.push(40));
console.log(list.push(50));
console.log(list.push(60));
console.log(list.push(70));
console.log(list.push(80));
console.log(list.push(90));
// console.log(list.pop());
// console.log(list.shift());

// console.log(list.getHead());
// console.log(list.getTail());
// // console.log(list);
// list.printList();
// list.printReverseList();

// console.log(list.pop());
// list.printList();
// list.printReverseList();
// console.log(list.pop());
// list.printList();
// list.printReverseList();
// console.log(list.getLength());

// console.log(list.pop());
// list.printList();
// list.printReverseList();
// console.log(list.getLength());
// console.log(list.pop());

// console.log(list.pop());
