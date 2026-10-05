var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};
MinStack.prototype.push = function(value) {
    this.stack.push(value);

    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
    }
};

MinStack.prototype.pop = function() {
    let removed = this.stack.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};