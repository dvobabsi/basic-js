const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return chainMaker.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (position > this.arr.length || isNaN(position) || position <= 0) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();

    return this;
  },
  finishChain() {
    let result = '';
    for(let i = 0; i < this.arr.length; i++) {
      result += `( ${this.arr[i]} )~~`;
    }

    this.arr = [];
    return result.slice(0, -2);

    // this.arr.forEach((el) => {
    //   result += `( ${el} )~~`;
    // });

    // this.arr = [];
    // return result.slice(0, -2);
  }
};

module.exports = {
  chainMaker
};
