class MaxBinaryHeap {
  constructor() {
    this.list = [];
  }

  insert(val) {
    if (!this.list.length) {
      this.list.push(val);
      return this.list;
    }

    //bubble up logic
    this.list.push(val);

    let index = this.list.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.list[index] > this.list[parentIndex]) {
      let temp = this.list[parentIndex];
      this.list[parentIndex] = this.list[index];
      this.list[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this.list;
  }
  //   remove() {
  //     let index = 0;
  //     let length = this.list.length - 1;

  //     // destructuring swap array new syntax
  //     [this.list[index], this.list[length]] = [
  //       this.list[length],
  //       this.list[index],
  //     ];

  //     // sinkDown logic
  //     //colt's code is different from yours check it also
  //     let removed = this.list.pop();
  //     length = this.list.length - 1;
  //     let leftChild = index * 2 + 1;
  //     let rightChild = index * 2 + 2;
  //     if (length > 1) {
  //       while (
  //         this.list[index] < Math.max(this.list[leftChild], this.list[rightChild])
  //       ) {
  //         let maxIndex =
  //           this.list[leftChild] ===
  //           Math.max(this.list[leftChild], this.list[rightChild])
  //             ? leftChild
  //             : rightChild;

  //         let tmp = this.list[maxIndex];
  //         this.list[maxIndex] = this.list[index];
  //         this.list[index] = tmp;
  //         index++;
  //         leftChild = index * 2 + 1;
  //         rightChild = index * 2 + 2;
  //       }
  //     } else {
  //       if (this.list[index] < this.list[length]) {
  //         [this.list[index], this.list[length]] = [
  //           this.list[length],
  //           this.list[index],
  //         ];
  //       }
  //     }
  //     return removed;
  //   }

  //remove Colt
  remove() {
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
    let length = this.list.length;
    while (true) {
      let leftChildIdx = index * 2 + 1;
      let rightChildIdx = leftChildIdx + 1;

      if (leftChildIdx <= length - 1 && rightChildIdx <= length - 1) {
        let maxIndex =
          this.list[leftChildIdx] ===
          Math.max(this.list[leftChildIdx], this.list[rightChildIdx])
            ? leftChildIdx
            : rightChildIdx;
        if (this.list[index] < this.list[maxIndex]) {
          [this.list[index], this.list[maxIndex]] = [
            this.list[maxIndex],
            this.list[index],
          ];
          index = maxIndex;
        } else {
          return;
        }
      } else if (leftChildIdx <= length - 1) {
        if (this.list[index] < this.list[leftChildIdx]) {
          [this.list[index], this.list[leftChildIdx]] = [
            this.list[leftChildIdx],
            this.list[index],
          ];
        }
        return;
      } else {
        return;
      }
    }
  }
}

const maxHeap = new MaxBinaryHeap();

// console.log(maxHeap.insert(41));
// console.log(maxHeap.insert(39));
// console.log(maxHeap.insert(33));
// console.log(maxHeap.insert(18));
// console.log(maxHeap.insert(27));
// console.log(maxHeap.insert(12));

console.log(maxHeap.insert(10));
console.log(maxHeap.insert(20));
console.log(maxHeap.insert(30));
console.log(maxHeap.insert(40));
console.log(maxHeap.insert(50));
console.log(maxHeap.insert(1));
console.log(maxHeap.insert(6));
console.log(maxHeap.insert(9));
console.log(maxHeap.insert(1));
console.log(maxHeap.remove());
console.log(maxHeap.list);
console.log(maxHeap.remove());
console.log(maxHeap.list);
console.log(maxHeap.remove());
console.log(maxHeap.list);
console.log(maxHeap.remove());
console.log(maxHeap.list);
console.log(maxHeap.remove());
console.log(maxHeap.list);
console.log(maxHeap.remove());
console.log(maxHeap.list);
console.log(maxHeap.remove());
console.log(maxHeap.list);
console.log(maxHeap.remove());
console.log(maxHeap.list);
console.log(maxHeap.remove());
console.log(maxHeap.list);
console.log(maxHeap.remove());
console.log(maxHeap.list);
