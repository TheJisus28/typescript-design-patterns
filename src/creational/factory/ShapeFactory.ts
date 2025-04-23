// ShapeFactory.ts
import { Shape, Circle, Square, Triangle } from "./Shape";
import { ShapeType } from "./ShapeType";

// Factory class responsible for creating shape instances
class ShapeFactory {
  public static createShape(type: ShapeType): Shape {
    switch (type) {
      case ShapeType.Circle:
        return new Circle();
      case ShapeType.Square:
        return new Square();
      case ShapeType.Triangle:
        return new Triangle();
      default:
        throw new Error("Invalid shape type");
    }
  }
}

export default ShapeFactory;
