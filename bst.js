class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.sortedArr = array.sort((curr, acc) => curr - acc, 0);
    this.root = this.buildTree(this.sortedArr);
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const end = array.length - 1;

    const mid = Math.floor(end / 2);
    const root = new Node(arr[mid]);

    root.left = this.buildTree(array.slice(0, mid));
    root.right = this.buildTree(array.slice(mid + 1));

    return root;
  }
}

const arr = [4, 3, 1, 2];

const tree = new Tree(arr);

console.log(tree.buildTree(arr));
