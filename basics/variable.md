# 📌 Variables in JavaScript

## What are Variables?
Variables are used to store data in JavaScript. They act as containers for storing values, which can be modified and used throughout the program.

## Declaring Variables in JavaScript
JavaScript provides three ways to declare variables:

1. `var` (Old way, function-scoped)
2. `let` (Block-scoped, introduced in ES6)
3. `const` (Block-scoped, for constant values)

### 1️⃣ Using `var`
```javascript
var name = "John";
console.log(name); // Output: John
```
🔹 `var` is **function-scoped**, meaning it is accessible throughout the function where it is declared.
🔹 Variables declared with `var` can be **redeclared and updated**.
🔹 It does **not support block-scoping**, which can lead to unexpected behavior.

#### Example:
```javascript
if (true) {
    var age = 25;
}
console.log(age); // ✅ Works, because 'var' is function-scoped
```

---

### 2️⃣ Using `let`
```javascript
let city = "New York";
console.log(city); // Output: New York
```
🔹 `let` is **block-scoped**, meaning it is only accessible inside the block `{}` where it is declared.
🔹 `let` allows updating values but does **not** allow redeclaring the variable in the same scope.

#### Example:
```javascript
if (true) {
    let score = 100;
    console.log(score); // ✅ Works inside the block
}
console.log(score); // ❌ Error: score is not defined outside the block
```

---

### 3️⃣ Using `const`
```javascript
const PI = 3.14159;
console.log(PI); // Output: 3.14159
```
🔹 `const` is also **block-scoped**.
🔹 **Cannot be reassigned** after declaration.
🔹 **Must be initialized** when declared.

#### Example:
```javascript
const country = "India";
country = "USA"; // ❌ Error: Assignment to constant variable.
```

---

## 🆚 Differences between `var`, `let`, and `const`

| Feature      | `var` | `let` | `const` |
|-------------|------|------|--------|
| Scope       | Function-scoped | Block-scoped | Block-scoped |
| Redeclaration | ✅ Allowed | ❌ Not Allowed | ❌ Not Allowed |
| Reassignment | ✅ Allowed | ✅ Allowed | ❌ Not Allowed |
| Hoisting    | ✅ Hoisted (with `undefined`) | ✅ Hoisted (but not initialized) | ✅ Hoisted (but not initialized) |

---

## 📝 Best Practices
✔️ Always prefer `let` or `const` over `var` to avoid scope-related issues.
✔️ Use `const` when you don't want to reassign values.
✔️ Use meaningful variable names for better code readability.

---

✅ Now you know how to declare and use variables in JavaScript! 🚀

Next: [Data Types & Type Conversion](./data-types.md) ➡️
