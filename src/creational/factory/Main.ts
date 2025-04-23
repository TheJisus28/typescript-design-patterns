// main.ts
import ShapeFactory from "./ShapeFactory";
import { ShapeType } from "./ShapeType";

// 🏗️ STEP 1: Use the factory to create shapes
// Instead of manually instantiating shapes with `new`, we delegate the creation
// to the factory. This hides the creation logic and makes our code cleaner.
const circle = ShapeFactory.createShape(ShapeType.Circle);
const square = ShapeFactory.createShape(ShapeType.Square);
const triangle = ShapeFactory.createShape(ShapeType.Triangle);

console.log("✅ Step 1: Shapes have been created using the factory method.");
console.log("We didn't use `new` directly — the factory handled everything!\n");

// 🖼️ STEP 2: Use the shapes
// All shapes implement the same interface, so we can treat them the same way.
// This is where polymorphism shines: each object responds to `draw()` in its own way.
console.log("🎨 Step 2: Drawing each shape using its `draw()` method:");
console.log("- Circle says:");
circle.draw(); // Output: Drawing a Circle

console.log("- Square says:");
square.draw(); // Output: Drawing a Square

console.log("- Triangle says:");
triangle.draw(); // Output: Drawing a Triangle

// 🧠 Summary:
// - We created shapes through a centralized factory.
// - We used a shared interface to call their methods.
// - We avoided direct coupling to specific shape classes.
console.log("\n📌 Summary:");
console.log(
  "Thanks to the Factory Pattern, we can create and use objects flexibly,"
);
console.log("without depending on specific classes or constructors.");
