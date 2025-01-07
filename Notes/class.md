### **Classes and Objects in TypeScript**

In TypeScript, classes are used to create blueprints for objects. An object is an instance of a class, which encapsulates properties and methods. TypeScript builds upon the object-oriented features of JavaScript, adding types to help improve code quality and developer experience.

Let's break down the concepts of **classes** and **objects** in TypeScript with simple examples.

---

### **1. Classes in TypeScript**

A **class** is a blueprint for creating objects. It defines the properties (attributes) and methods (functions) that an object will have.

#### Defining a Class:
In TypeScript, a class can be defined using the `class` keyword. Here's the basic structure:

```typescript
class ClassName {
  // Properties (Attributes)
  property1: type;
  property2: type;

  // Constructor (initializes the properties)
  constructor(property1: type, property2: type) {
    this.property1 = property1;
    this.property2 = property2;
  }

  // Method (Behavior)
  methodName(): void {
    // Method implementation
  }
}
```

---

### **2. Example of a Simple Class**

#### Defining a `Person` class with properties and a method:
```typescript
class Person {
  name: string;
  age: number;

  // Constructor to initialize properties
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method to display the person's details
  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Creating an object (instance) of the Person class
let person1 = new Person('John', 30);

// Calling the method of the Person class
person1.display();  // Output: Name: John, Age: 30
```

In this example:
- The `Person` class defines two properties: `name` and `age`.
- The `constructor` initializes these properties when a new object is created.
- The `display()` method is used to print the details of the person.

---

### **3. Creating Objects (Instances of Classes)**

Once a class is defined, you can create an **object** or **instance** of that class using the `new` keyword.

```typescript
let person2 = new Person('Alice', 25);  // Creating a new object of Person class
person2.display();  // Output: Name: Alice, Age: 25
```

An object is an instance of the class with the specific values assigned to the properties.

---

### **4. Access Modifiers in TypeScript**

TypeScript supports **access modifiers** like `public`, `private`, and `protected` to control the visibility of class members.

- **`public`**: Members are accessible from anywhere (default).
- **`private`**: Members are only accessible within the class.
- **`protected`**: Members are accessible within the class and its subclasses.

#### Example:
```typescript
class Car {
  public brand: string;
  private speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  // Public method can access private property
  displaySpeed(): void {
    console.log(`Speed: ${this.speed}`);
  }
}

let car = new Car('Toyota', 120);
console.log(car.brand);  // Output: Toyota
// console.log(car.speed);  // Error: Property 'speed' is private
car.displaySpeed();  // Output: Speed: 120
```

In this example, the `speed` property is private, so it cannot be accessed directly from outside the class. The `brand` property is public, so it can be accessed.

---

### **5. Constructor and Initialization**

The `constructor` is a special method used to initialize new objects. When a new object is created, the `constructor` is called automatically.

#### Example:
```typescript
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showDetails(): void {
    console.log(`Student Name: ${this.name}, Age: ${this.age}`);
  }
}

let student = new Student('David', 20);
student.showDetails();  // Output: Student Name: David, Age: 20
```

Here, the constructor receives arguments (`name` and `age`) and initializes the properties accordingly.

---

### **6. Methods in Classes**

Methods are functions defined inside a class. They can manipulate the class properties and perform specific tasks.
 
#### Example:
```typescript
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}

let calc = new Calculator();
console.log(calc.add(5, 3));  // Output: 8
console.log(calc.subtract(5, 3));  // Output: 2
```

In this example, the `Calculator` class has two methods, `add()` and `subtract()`, that perform arithmetic operations.

---
