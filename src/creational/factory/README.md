# 🏭 Factory Pattern

Hey there! 👋  
I'm exploring classic design patterns in **TypeScript**, and today’s pattern is the **Factory Pattern** — one of the most common and useful creational patterns in software development.

---

## ❓ What is the Factory Pattern?

The **Factory Pattern** provides a way to create objects **without specifying the exact class** of the object that will be created.

Think of it like a **vending machine**:  
You press a button for what you want, and the machine handles the actual creation. You don’t care _how_ it’s made — just that you get the item you asked for.

---

## 🎯 Problem It Solves

Imagine you have a set of classes like `Circle`, `Square`, and `Triangle`.  
You could use `new` directly:

```ts
const circle = new Circle();
```

But what if the creation logic becomes complex? Or you want to hide the implementation? Or choose the type dynamically?
That’s where the **Factory Pattern** shines.

---

## 📦 When Should You Use It?

Use a Factory when:

- 🧩 You have multiple classes that implement the same interface.
- 🧪 You want to **abstract object creation** logic from business logic.
- 🌱 You plan to **add new types** in the future without changing too much existing code.
- 🧰 You want to **encapsulate object instantiation** in one place.

---

## 🛠️ How It Works

Here's how the pieces fit together:

1. Define a **common interface** — in this case, `Shape`.
2. Create **concrete classes** like `Circle`, `Square`, and `Triangle` that implement the interface.
3. Implement a **Factory class** that returns the correct shape based on input.
4. Use an **enum** (`ShapeType`) to make inputs type-safe and readable.

---

## 📌 Example Overview

In this folder, you’ll find:

| File              | Description                                  |
| ----------------- | -------------------------------------------- |
| `Shape.ts`        | Interface and concrete shape implementations |
| `ShapeType.ts`    | Enum defining supported shape types          |
| `ShapeFactory.ts` | Factory class that creates shape instances   |
| `main.ts`         | Demonstration of the Factory in action       |
| `factory.test.ts` | Unit tests to verify factory behavior        |
| `README.md`       | You’re reading it! 🧠                        |

---

## 🧪 Try It Yourself

To run the Factory Pattern demo:

```bash
npm run factory
```

To run the tests:

```bash
npm run factory:test
```

---

## ✅ Benefits

- 🧠 Encapsulates object creation logic
- 💡 Promotes code reuse and maintainability
- 🧱 Encourages a more modular architecture
- 🚫 Avoids tight coupling to specific classes

---

## ⚠️ Things to Watch Out For

- 🔍 May introduce **extra complexity** if overused for simple objects
- 📚 Can become bloated if the factory grows too large
- ❓ Avoid turning your factory into a “God class” with too many responsibilities

---

## 💬 My Thoughts

The Factory Pattern is one of those tools that feels simple at first — but once you use it in a **real-world project**, you start to appreciate how much cleaner and scalable it makes your code. Especially when working with polymorphic behavior or plugging in new types on the fly.

If you ever find yourself duplicating object creation logic all over your code — chances are you need a Factory.

---

## 🚀 Bonus Challenge

Try extending this example by adding a new shape like `Rectangle`, or even create a more advanced `ShapeFactory` that reads configuration from a JSON file.
You could also explore **Abstract Factory**, a more powerful sibling of this pattern.

---

Let me know if you have ideas or improvements — I’m always down to learn more! 🙌
