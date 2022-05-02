const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
   return this.rootTree;
  }

  add(data) {
    this.rootTree = newNode(this.rootTree, data);

    function newNode(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (node.data > data) 
      {
        node.left = newNode(node.left, data);
      } else {
        node.right = newNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return existNode(this.rootTree, data);
    function existNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (node.data > data) {
        return existNode(node.left, data);

      } else {
        return existNode(node.right, data);
      }
    }
  }

  find(data) {

    return findNode(this.rootTree, data);
    function findNode(node, data) {
      if (node.data === data) return node;
      if (data > node.data && !node.right) return null;
      if (data < node.data && !node.left) return null;
      if (node.data > data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.right, data)
      }
    }
  }


  remove(data) {

    this.root = removeNode(this.rootTree, data)
    function removeNode(node, data) {
      if (!node) return null;
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node;
      } else {
        if (!node.left && !node.right) return null;

        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }
        node.data = maxFromLeft.data

        node.left = removeNode(node.left, maxFromLeft.data);
        return node;
      }
    }
  }

  min() {

    return searchMn(this.rootTree)
    function searchMn(node) {
      if (!node) return null;
      if (!node.left) {
        return node.data;
      } else {
        return searchMn(node.left);
      }
    }
  }

  max() {
       
    return searchMx(this.rootTree);
    function searchMx(node) {
      if (!node) {
        return null;
      }
      if (!node.right) {
        return node.data
      } else {
        return searchMx(node.right);
      }
    }

  }

// console.log(BinarySearchTree.max);

}
// console.log(BinarySearchTree.min);






module.exports = {
  BinarySearchTree
};