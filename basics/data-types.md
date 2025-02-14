# Data Types in JavaScript

JavaScript is a **dynamically typed language**, meaning you don't need to declare the type of a variable explicitly. The type is determined automatically based on the value assigned to it.

## **Primitive Data Types**
JavaScript has **7 primitive data types**:

1. **String** - Represents textual data.
2. **Number** - Represents both integer and floating-point numbers.
3. **BigInt** - Used for very large numbers beyond `Number.MAX_SAFE_INTEGER`.
4. **Boolean** - Represents `true` or `false` values.
5. **Undefined** - A variable that has been declared but not assigned a value.
6. **Null** - Represents an intentional absence of value.
7. **Symbol** - Used to create unique values, mainly for object property keys.

### **Example of Primitive Data Types**
```javascript
let name = "John";  // String
let age = 25;       // Number
let bigNumber = 9007199254740991n; // BigInt
let isStudent = true; // Boolean
let city; // Undefined
let emptyValue = null; // Null
let uniqueID = Symbol('id'); // Symbol
```

## **Non-Primitive (Reference) Data Types**
These data types hold references to values and include:

1. **Objects** - Collections of key-value pairs.
2. **Arrays** - Ordered lists of values.
3. **Functions** - Blocks of reusable code.

### **Example of Non-Primitive Data Types**
```javascript
let person = { name: "Alice", age: 30 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
let greet = function() { console.log("Hello!"); }; // Function
```

## **Type Conversion**
JavaScript allows explicit and implicit type conversions.

### **Implicit Type Conversion (Type Coercion)**
JavaScript automatically converts data types when needed.
```javascript
console.log("5" + 2); // "52" (Number converted to String)
console.log("5" - 2); // 3 (String converted to Number)
console.log(true + 1); // 2 (Boolean converted to Number)
```

### **Explicit Type Conversion**
Using built-in functions to convert data types manually:
```javascript
let strNumber = "42";
let num = Number(strNumber); // Converts string to number
console.log(num); // 42

let boolValue = Boolean("hello"); // Converts string to boolean
console.log(boolValue); // true

let str = String(100); // Converts number to string
console.log(str); // "100"
```

## **Checking Data Types**
You can check the data type of a value using `typeof` operator:
```javascript
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (Arrays are objects)
console.log(typeof function(){}); // "function"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (Special case in JavaScript)
```

## **Conclusion**
Understanding data types in JavaScript is crucial for writing efficient and bug-free code. Always be mindful of type coercion and use explicit type conversions when necessary to avoid unexpected results.

