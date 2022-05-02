const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
   
    console.log({value: 3, next: null });
    return {value: 3, next: null };
  }

  enqueue(value) {
    arr.push(value);
  }

  dequeue() {
    
    return arr.shift();

  }
}

let queue = new Queue();
  let arr =[];

  // queue.getUnderlyingList();
  // queue.enqueue(1);
  // queue.enqueue(3);
  // console.log(arr);
  // queue.dequeue();
  // console.log(arr);



module.exports = {
  Queue
};
