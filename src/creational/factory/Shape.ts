// Shape.ts

// 1. Shape interface
export interface Shape {
  draw(): void;
}

// 2. Concrete Circle class
export class Circle implements Shape {
  draw(): void {
    console.log("Drawing a Circle");
  }
}

// 3. Concrete Square class
export class Square implements Shape {
  draw(): void {
    console.log("Drawing a Square");
  }
}

// 4. Concrete Triangle class
export class Triangle implements Shape {
  draw(): void {
    console.log("Drawing a Triangle");
  }
}
