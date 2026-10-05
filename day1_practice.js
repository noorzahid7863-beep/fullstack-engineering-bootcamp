// ============================================================
// WEEK 2 DAY 1: DATA STRUCTURES & PROBLEM SOLVING PRACTICE
// Name: Noor Zahid
// ============================================================

// 1. ARRAYS AND OBJECTS (Iteration & Filtering)
console.log("=== 1. Arrays and Objects ===");

const students = [
  { name: "Noor", score: 85 },
  { name: "Ali", score: 45 },
  { name: "Zahid", score: 90 }
];

// Filter students who passed (score >= 50)
const passedStudents = students.filter(student => student.score >= 50);
console.log("Passed Students:", passedStudents);

// Extract only names
const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);


// 2. SET (Removing Duplicates)
console.log("\n=== 2. Set Data Structure ===");

const numbers = [10, 20, 20, 30, 40, 40, 50];
const uniqueNumbers = [...new Set(numbers)];

console.log("Original Array:", numbers);
console.log("Unique Numbers:", uniqueNumbers);


// 3. MAP (Key-Value Pair Operations)
console.log("\n=== 3. Map Data Structure ===");

const userRoles = new Map();
userRoles.set("admin", "Full Access");
userRoles.set("developer", "Code Access");

console.log("Admin Role:", userRoles.get("admin"));
console.log("Has Developer Role:", userRoles.has("developer"));


// 4. STACK IMPLEMENTATION (LIFO - Last In First Out)
console.log("\n=== 4. Stack (LIFO) ===");

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const myStack = new Stack();
myStack.push("Page 1");
myStack.push("Page 2");
console.log("Current Top Page:", myStack.peek());
console.log("Popped Page:", myStack.pop());


// 5. SEARCHING ALGORITHM (Linear Search)
console.log("\n=== 5. Linear Search ===");

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target found at index
    }
  }
  return -1; // Target not found
}

const dataList = [5, 12, 8, 20, 15];
const targetIndex = linearSearch(dataList, 20);
console.log("Target 20 found at index:", targetIndex);