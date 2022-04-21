class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(item) {
    this.top += 1;
    this.items[this.top] = item;
  }

  pop() {
    const item = this.items[this.top];
    this.top -= 1;
    return item;
  }
}

module.exports = Stack;