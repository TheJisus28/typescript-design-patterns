// singleton.test.ts
import Singleton from "./Singleton.ts";

beforeEach(() => {
  // Reset the Singleton's state before each test
  const singletonInstance = Singleton.getInstance();
  (singletonInstance as any).data = []; // Access the private 'data' property and reset it
});

describe("Singleton Pattern", () => {
  it("should always return the same instance", () => {
    // 1. Get Instances multiple times.
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();
    const singleton3 = Singleton.getInstance();

    // 2. Verify that all instances are the same object.
    expect(singleton1).toBe(singleton2);
    expect(singleton2).toBe(singleton3);
    expect(singleton1).toBe(singleton3);
  });

  it("should store and retrieve data correctly in the single instance", () => {
    // 1. Get the Singleton instance.
    const singleton = Singleton.getInstance();

    // 2. Add multiple data items.
    singleton.addData("Test Data 1");
    singleton.addData("Test Data 2");
    singleton.addData("Test Data 3");

    // 3. Verify that all data items are stored in the correct order.
    expect(singleton.getData()).toEqual([
      "Test Data 1",
      "Test Data 2",
      "Test Data 3",
    ]);
  });

  it("should maintain data across multiple calls to getInstance", () => {
    // 1. Get the Singleton instance.
    const singleton1 = Singleton.getInstance();

    // 2. Add data using the first instance.
    singleton1.addData("Initial Data");

    // 3. Get the Singleton instance again.
    const singleton2 = Singleton.getInstance();

    // 4. Verify that the data is still present in the second instance.
    expect(singleton2.getData()).toEqual(["Initial Data"]);

    // 5. Add more data using the second instance.
    singleton2.addData("Additional Data");

    // 6. Verify that both instances reflect the updated data.
    expect(singleton1.getData()).toEqual(["Initial Data", "Additional Data"]);
    expect(singleton2.getData()).toEqual(["Initial Data", "Additional Data"]);
  });

  it("should handle empty data array correctly", () => {
    // 1. Get the Singleton instance.
    const singleton = Singleton.getInstance();

    // 2. Verify that the data array is initially empty.
    expect(singleton.getData()).toEqual([]);
  });

  it("should handle adding and retrieving data with special characters", () => {
    // 1. Get the Singleton instance.
    const singleton = Singleton.getInstance();

    // 2. Add data with special characters.
    singleton.addData("Special Characters: !@#$%^&*()");

    // 3. Verify that the data is stored and retrieved correctly.
    expect(singleton.getData()).toEqual(["Special Characters: !@#$%^&*()"]);
  });
});
