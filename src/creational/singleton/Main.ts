// main.ts
import Singleton from "./Singleton.js";

// 1. Get Singleton Instances
// Both variables point to the same unique instance.
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log("Step 1: Getting Singleton Instances.");
console.log("Instance 1:", singleton1);
console.log("Instance 2:", singleton2);

// 2. Add Data to Instances
// Data is stored in the unique instance, so it's shared.
singleton1.addData("Item 1");
singleton2.addData("Item 2");

console.log("\nStep 2: Adding data to the instances.");
console.log("Data added to instance 1: 'Item 1'");
console.log("Data added to instance 2: 'Item 2'");

// 3. Show Data
// Both instances show the same data, confirming they are the same.
console.log("\nStep 3: Showing stored data.");
console.log("Data in instance 1:", singleton1.getData()); // Output: ['Item 1', 'Item 2']
console.log("Data in instance 2:", singleton2.getData()); // Output: ['Item 1', 'Item 2']

// 4. Verify Instances
// Checks that both variables point to the same instance.
console.log("\nStep 4: Verifying if instances are the same.");
console.log("Is Instance 1 equal to Instance 2?", singleton1 === singleton2); // Output: true

console.log(
  "\nConclusion: Both variables point to the same Singleton instance."
);
