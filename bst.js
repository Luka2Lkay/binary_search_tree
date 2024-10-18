class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
    constructor(array){
        this.sortedArr = array.sort((curr, acc) => curr - acc, 0)
        this.root = this.buildTree(this.sortedArr);
    }

    buildTree(array){
return array;
    }
}

const arr = [4,3,1,2]

const tree = new Tree(arr);

console.log(tree.buildTree(arr))


