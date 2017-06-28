class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }
  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);
    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }
  //breadth first goes through each level --left to right
  //builds a queue at each level
  bfs(values = []) {
    const queue = [this];
    while(queue.length) {
      const node = queue.shift();
      values.push(node.value);
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right){
        queue.push(node.right);
      }
    }
    return values;
  }

}




function indexOf(array, value) {
  for(let i=0; i<array.length; i++) {
    if(array[i] === value) {
      return i;
    }
  }
  return -1;
}

const letters = ['a','b','c','d'];


function binarySearch(array, value, start = 0, end = array.length) {

  if(start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

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

class BinaryTree {
  constructor(key = null, value = null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinaryTree(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right === null) {
        this.right = new BinaryTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }
  //depth first goes all the way to bottom
  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);
    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }
  //breadth first goes through each level --left to right
  bfs(values = []) {
    const queue = [this];
    while(queue.length) {
      const node = queue.shift();
      values.push(node.value);
      if(node.left) {
        queue.push();
      }
    }
  }
}


let input = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68,
  15, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 31, 
  26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5, 76, 62];

function intSearch(array, int){
  for(let i = 0; i < array.length; i++){
    if(array[i] === int){
      return array[i];
    }
  }
  return -1;
}

// console.log(intSearch(input, 0));
// let input1 = input.sort((a, b) => a - b);
// console.log(input1);
// console.log(binarySearch(input1, 0));

// const Btree = new BinaryTree();
// Btree.insert(5, 5);
// Btree.insert(3, 3);
// Btree.insert(8, 8);
// Btree.insert(1, 1);
// Btree.insert(2, 2);

// console.log(Btree);


//given 531.45
//climb through a BST looking for the correct sequence of numbers
//on the first recursion, look for the first number in the int.
//then call the function again with (tree.left || tree.right, next number)


//walk into library, looking for histry book 831.32
//go to shelf with 500 category. Go to the higher end. This effectively eliminates half of the library from consideration.
//repeat this process until we narrow it down to the book we're looking for.

// let library = [100, 200, 300, 400, 500, 562.3, 600, 700, 800, 900];


// const nums = [];
// library.forEach(book => {
//   let num = book.split(' ');
//   // console.log(num[0]);
//   nums.push(num[0]);
// });
// console.log(nums);
// console.log(nums[0] >= nums[5])


function deweyDecimal(library, target, start = 0, end = library.length){
  if(start > end){
    return -1;
  }
  let midpoint = Math.round((start + end) / 2);
  if(midpoint >= library.length) midpoint -=1;
  let item = library[midpoint].split(' ');
  let targetNum = target.split(' ');
  targetNum = targetNum[0];
  let itemNum = item[0];
  let fullItem = library[midpoint];
  console.log(fullItem);
  console.log(targetNum);
  console.log(midpoint + '<--  midpoint   ' + start + '  <---- start   ' + end + '  <-----end' );
  if(itemNum > targetNum){
    return deweyDecimal(library, target, start, midpoint - 1);
  }else if (itemNum < targetNum){
    return deweyDecimal(library, target, midpoint + 1, end);
  } else if (fullItem == target) {
    return midpoint;
  } else {
    return deweyDecimal(library, target, start-1, end-1);
  }
}
const library = [
  '005.133 Mike Cowlishaw: The REXX Language',
  '005.133 Sams: Teach Yourself C++ In 21 Days',
  '005.133 Bjarne Stroustrup: The C++ Programming Language',
  '005.2762 Douglas Crockford: JavaScript: The Good Parts',
  '005.2762 David Flanagan: JavaScript: The Definitive Guide',
  '005.44684 Meinhard Schmidt: Windows Vista for Dummies', //It certainly is...
  '220.52081 Zondervan: NIV Study Bible',
  '231.7652 Dr Russell Humphries: Starlight and Time',
  '623.82509051 Frederick Thomas Jane: Jane\'s Fighting Ships', //So far, the ships are winning.
  '796.8092 Chuck Norris: The Official Chuck Norris Fact Book'
];

for(let i = 0; i < library.length; i++){
  console.log(deweyDecimal(library, library[i]));
}

// const Btree = new BinaryTree();
// Btree.insert(5, 5);
// Btree.insert(3, 3);
// Btree.insert(1, 1);
// Btree.insert(2, 2);
// Btree.insert(5, 5);

// // console.log(BStree.dfs());
// console.log(deweyDecimal(Btree, 531.45));
// console.log(Btree);
