import ShapeFactory from "./ShapeFactory.ts";
import { ShapeType } from "./ShapeType.ts";

describe("Factory Pattern", () => {
  it("should create a Circle instance", () => {
    const shape = ShapeFactory.createShape(ShapeType.Circle);
    const logSpy = jest.spyOn(console, "log");
    shape.draw();
    expect(logSpy).toHaveBeenCalledWith("Drawing a Circle");
  });

  it("should create a Square instance", () => {
    const shape = ShapeFactory.createShape(ShapeType.Square);
    const logSpy = jest.spyOn(console, "log");
    shape.draw();
    expect(logSpy).toHaveBeenCalledWith("Drawing a Square");
  });

  it("should create a Triangle instance", () => {
    const shape = ShapeFactory.createShape(ShapeType.Triangle);
    const logSpy = jest.spyOn(console, "log");
    shape.draw();
    expect(logSpy).toHaveBeenCalledWith("Drawing a Triangle");
  });

  it("should throw an error for invalid shape type", () => {
    expect(() => ShapeFactory.createShape("INVALID" as ShapeType)).toThrow(
      "Invalid shape type"
    );
  });
});
