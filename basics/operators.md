# Operators in JavaScript

Operators in JavaScript are symbols that perform operations on variables and values. JavaScript has different types of operators categorized based on their functionality.

## **1. Arithmetic Operators**
These operators perform mathematical operations.

| Operator | Description | Example |
|----------|-------------|---------|
| `+`  | Addition | `5 + 2 = 7` |
| `-`  | Subtraction | `5 - 2 = 3` |
| `*`  | Multiplication | `5 * 2 = 10` |
| `/`  | Division | `5 / 2 = 2.5` |
| `%`  | Modulus (Remainder) | `5 % 2 = 1` |
| `**` | Exponentiation | `5 ** 2 = 25` |

### Example:
```javascript
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```

## **2. Assignment Operators**
These operators assign values to variables.

| Operator | Description | Example |
|----------|-------------|---------|
| `=`  | Assigns a value | `x = 10` |
| `+=` | Adds and assigns | `x += 5` (same as `x = x + 5`) |
| `-=` | Subtracts and assigns | `x -= 5` |
| `*=` | Multiplies and assigns | `x *= 5` |
| `/=` | Divides and assigns | `x /= 5` |
| `%=` | Modulus and assigns | `x %= 5` |

### Example:
```javascript
let x = 10;
x += 5; // x = 15
x *= 2; // x = 30
console.log(x);
```

## **3. Comparison Operators**
These operators compare two values and return a boolean result (`true` or `false`).

| Operator | Description | Example |
|----------|-------------|---------|
| `==`  | Equal to | `5 == "5"` (true) |
| `===` | Strict equal (checks value and type) | `5 === "5"` (false) |
| `!=`  | Not equal | `5 != 3` (true) |
| `!==` | Strict not equal | `5 !== "5"` (true) |
| `>`   | Greater than | `10 > 5` (true) |
| `<`   | Less than | `10 < 5` (false) |
| `>=`  | Greater than or equal | `10 >= 10` (true) |
| `<=`  | Less than or equal | `5 <= 5` (true) |

### Example:
```javascript
console.log(5 == "5");  // true (loose comparison)
console.log(5 === "5"); // false (strict comparison)
console.log(10 > 5);    // true
console.log(10 <= 5);   // false
```

## **4. Logical Operators**
These operators are used to combine multiple conditions.

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | Logical AND | `true && false` (false) |
| `||` | Logical OR | `true || false` (true) |
| `!`  | Logical NOT | `!true` (false) |

### Example:
```javascript
let a = true, b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
```

## **5. Bitwise Operators**
These operators perform bitwise operations on numbers.

| Operator | Description | Example (Binary) |
|----------|-------------|-----------------|
| `&` | AND | `5 & 1` (0101 & 0001 → 0001 = 1) |
| `|` | OR | `5 | 1` (0101 | 0001 → 0101 = 5) |
| `^` | XOR | `5 ^ 1` (0101 ^ 0001 → 0100 = 4) |
| `~` | NOT | `~5` (inverts bits) |
| `<<` | Left shift | `5 << 1` (0101 → 1010 = 10) |
| `>>` | Right shift | `5 >> 1` (0101 → 0010 = 2) |

### Example:
```javascript
console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(5 ^ 1); // 4
console.log(~5); // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2
```

## **6. Ternary Operator**
A shorthand for `if-else` conditions.

### Syntax:
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

### Example:
```javascript
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
```

## **7. typeof Operator**
Returns the data type of a variable.

### Example:
```javascript
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (special case)
console.log(typeof function(){}); // "function"
```

## **Conclusion**
Operators are fundamental in JavaScript, enabling us to manipulate data, compare values, and control logic flow effectively. Mastering them is key to writing efficient JavaScript code.

