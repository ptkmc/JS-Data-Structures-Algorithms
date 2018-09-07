/* Stacks */

// functions: push, pop, peek, length

function Stack() {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }
    
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
    }

    // Return the last element in the stack
    this.peek = function(){
        return this.storage[this.count-1];
    }

    // Return the length of the stack
    this.size = function(){
        return this.count;
    }
    
}

var myStack = new Stack();

// Tests
myStack.push(77);
myStack.push(88);
myStack.push(99);
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.peek());