class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val)
    if(!this.length) {
      this.head = newNode;
      this.length++
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
   
  }

  addToTail(val) {
    let newNode = new LinkedListNode(val)
    this.length++
    if (!this.head) {
      this.head = newNode;
      return this;
    } 
    let currNode = this.head;
    while (currNode.next) {
        currNode = currNode.next;
    }
    currNode.next = newNode;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;