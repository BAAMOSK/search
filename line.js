class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
}

function indexOf(array, value) {
  for(let i=0; i<array.length; i++) {
    if(array[i] === value) {
      return i;
    }
  }
  return -1;
};

const letters = ['a','b','c','d'];

// console.log(indexOf(letters, 'd'));

function binarySearch(array, value, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  if(start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];
  console.log(start, end);

  if(item === value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

// console.log(binarySearch(letters, 'd'));

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
  //depth first goes all the way to bottom
  dfs(values = []) {
    console.log(`This is the  dfs this`, this);
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);
    if (this.right) {
      values = this.right.dfs(values);
    }
    console.log(value);
    return values;
  }
  //breadth first goes through each level --left to right
  bfs(value = []) {
    const queue = [this];
    while(queue.length) {
      const node = queue.shift();
      values.push(node.value);
      if(node.left) {
        queue.push()
      }
    }
  }
}

const Btree = new BinaryTree();
Btree.insert(3, 3);
Btree.insert(5, 5);
Btree.insert(8, 8);
Btree.insert(1, 1);
Btree.insert(2, 2);

console.log(Btree.dfs());