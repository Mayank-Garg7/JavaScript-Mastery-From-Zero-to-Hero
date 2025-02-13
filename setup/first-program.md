# 🏁 Writing Your First JavaScript Program

Congratulations on setting up JavaScript! 🎉 Now, let's write your first JavaScript program and understand the basics.

---

## 📌 What is JavaScript?
JavaScript is a powerful programming language used to create dynamic and interactive web pages. It runs in the browser and allows us to control webpage behavior.

---

## 🚀 Writing Your First Program
There are multiple ways to run JavaScript. Let's start with the simplest one—writing JavaScript directly in an HTML file.

### 1️⃣ Using `<script>` Inside HTML
Create an `index.html` file and add the following code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First JavaScript Program</title>
</head>
<body>
    <h1>Welcome to JavaScript!</h1>
    <script>
        console.log("Hello, JavaScript World!");
        alert("Welcome to JavaScript!");
    </script>
</body>
</html>
```
👉 Open this file in a browser and check the console (`F12` > Console) and an alert box!

---

## 🖥️ Writing JavaScript in an External File
It's a good practice to keep JavaScript in a separate file. Let's do that:

### 1️⃣ Create an HTML File (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript First Program</title>
</head>
<body>
    <h1>Check the Console!</h1>
    <script src="script.js"></script>
</body>
</html>
```

### 2️⃣ Create a JavaScript File (`script.js`)
```js
console.log("Hello from script.js!");
document.body.style.backgroundColor = "lightblue";
```

👉 Open `index.html` in a browser and see JavaScript in action!

---

## 📝 Understanding the Basics
✔️ `console.log("Hello, JavaScript!");` → Prints messages in the browser console.
✔️ `alert("Hello!");` → Shows a popup alert box.
✔️ `document.body.style.backgroundColor = "lightblue";` → Changes webpage background color.

---

## 🎯 Next Steps
✔️ Experiment by changing the text and colors.
✔️ Learn about **variables, data types, and functions** in the next section!
