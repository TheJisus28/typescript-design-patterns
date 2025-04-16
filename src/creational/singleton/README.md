# Singleton Pattern

Hi everyone! I'm creating this repository to learn and document design patterns in TypeScript, and today I'm going to explain the Singleton pattern.

## What is the Singleton pattern all about?

Basically, the Singleton pattern is about ensuring there is only **one** instance of a class. Think of it as a global object that you can access from anywhere in your code.

## When would you actually use this?

You might use a Singleton when:

- You need to control access to something shared, like a database connection or a configuration object.
- You absolutely need to limit object creation to just one.
- You need a global access point to an object without polluting the global namespace.

## How does it work?

It's pretty straightforward:

1. We make the class constructor private, so you can't just call `new Singleton()` from anywhere.

2. We create a static method (usually called `getInstance()`) that returns the single instance.
3. Inside `getInstance()`, we check if the instance already exists. If it doesn't, we create it; otherwise, we simply return the existing one.

## Time for an example!

In the code, you'll see a `Singleton` class. We can add data to it and retrieve it, and since it's a Singleton, any changes we make are reflected everywhere.

## Cool things about it

- It helps control access to that single instance.
- It can save memory because you're not creating multiple objects.
- It gives you a clean way to access that object globally.

## Things to keep in mind

- It can sometimes hide dependencies, which makes testing a bit difficult.
- It can potentially break the Single Responsibility Principle if you cram too much into it.

## My Thoughts

Honestly, the Singleton pattern has its uses, but it's also one of those patterns that can be overused. It's important to really think about whether you **need** a global object before resorting to a Singleton.

Anyway, I hope this helps you understand the Singleton pattern a little better! Feel free to dive into the code and play around with it. Let me know if you have any questions or suggestions!

**To run the Singleton pattern code, type the following in your terminal:**

```bash
npm run singleton
```

**To run the Singleton pattern tests, type the following in your terminal:**

```bash
npm run singleton:test
```
