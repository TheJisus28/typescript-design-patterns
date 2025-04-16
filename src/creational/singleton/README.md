---

# 🎯 Singleton Pattern

Hey there! 👋  
I'm building this repository to learn and document design patterns in **TypeScript**, and today it's time to explore one of the classics: the **Singleton** pattern.

---

## ❓ What is the Singleton Pattern?

The **Singleton** pattern is all about making sure a class has **only one instance** — and providing a global point of access to it.

Think of it like having a **shared coffee machine** in your office: no matter who uses it, it's always the same machine.

---

## 📦 When Should You Use It?

Use a Singleton when:

- 🔁 You need to **share a single resource** (like a database connection, config, or logger).
- 🧱 You want to **limit object creation** to just one instance.
- 🌐 You need **global access** to a specific object, but want to avoid polluting the global namespace.

---

## 🛠️ How Does It Work?

The implementation is pretty straightforward:

1. ✅ Make the **constructor private**, so no one can call `new Singleton()` directly.
2. 🔁 Create a **static method** like `getInstance()` to control access.
3. 🧠 Inside `getInstance()`, check if the instance exists:
   - If it doesn't, create it.
   - If it does, just return it.

That way, every time someone requests the Singleton, they get the same instance!

---

## 📌 Example Overview

In the code, you'll find a class called `Singleton`. You can:

- Add data to it.
- Retrieve that data later from anywhere.
- Confirm that it's always the same object underneath. 🧪

---

## ✅ Benefits

- 💡 Controlled access to a single instance.
- 🧠 Saves memory — no duplicate objects.
- 📚 Easy to use across your codebase.

---

## ⚠️ Things to Watch Out For

- 🔍 Can **hide dependencies**, making testing trickier.
- ⚒️ May violate the **Single Responsibility Principle** if overloaded with logic.
- ❗ Overusing it can lead to code that’s hard to manage or extend.

---

## 💬 My Thoughts

The Singleton is super useful in some cases, but definitely not a pattern to sprinkle everywhere.  
Use it **wisely**, and always ask yourself: _Do I really need global state?_ If the answer is yes — Singleton might be your friend.

---

## 🧪 Try It Yourself

To run the Singleton pattern example:

```bash
npm run singleton
```

To run the tests:

```bash
npm run singleton:test
```

---

Feel free to explore the code and tweak it!  
If you have any questions or suggestions, I'd love to hear from you 🙌

---
