class Stack {
  constructor() {
    this.items = [];
    this.count = 0
  }

  push(item) {
    this.items.push(item);
    this.count = this.count + 1;
    console.log (this.items[this.items.length - 1]);
  }

  pop() {
    if(this.count > 0) {
      this.count = this.count - 1;
      this.items.pop();

      if (this.count === 0) {
        console.log ('EMPTY')
      }
      else {
        console.log (this.items[this.items.length - 1]);
      }
    }
  }

  inc(bottomItems, num) {
    for (let i = 0; i < bottomItems; i++) {
      this.items[i] = this.items[i] + num
      }
    console.log (this.items[this.items.length - 1]);
    }
}

let stack = new Stack();

stack.push(4);
stack.pop();
stack.push(3);
stack.push(5);
stack.push(2);
stack.inc(3,1);
stack.pop();
stack.push(1);
stack.inc(2,2);
stack.push(4);
stack.pop();
stack.pop();
