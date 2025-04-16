// singleton.ts

// 1. Singleton Class
// This class ensures that only one instance of itself exists.
class Singleton {
  // 2. Static Instance
  // The unique instance is stored here. It's static so it belongs to the class, not the instances.
  private static instance: Singleton;

  // 3. Internal Data
  // An array to store data, just to demonstrate that the instance can have state.
  private data: string[] = [];

  // 4. Private Constructor
  // Prevents direct instance creation from outside the class.
  private constructor() {}

  // 5. Static getInstance() Method
  // Returns the unique instance of the Singleton. If it doesn't exist, it creates it.
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // 6. Methods to Interact with Data
  // Allow adding and getting data from the unique instance.
  public addData(item: string): void {
    this.data.push(item);
  }

  public getData(): string[] {
    return this.data;
  }
}

// 7. Export the Singleton Class
// So it can be used in other files.
export default Singleton;
