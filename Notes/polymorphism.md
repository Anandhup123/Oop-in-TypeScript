### **Method Overloading and Method Overriding in Polymorphism in TypeScript**

In TypeScript, both **method overloading** and **method overriding** are related to polymorphism, but they serve different purposes. Let's dive into both concepts with examples to explain them clearly.

---

### **1. Method Overloading in TypeScript**

**Method Overloading** is a feature in TypeScript where you can define multiple methods with the **same name** but with different parameter types or numbers of parameters. TypeScript doesn't support method overloading in the same way as other languages like Java. Instead, it allows us to define a method signature multiple times, and TypeScript chooses the correct method based on the arguments passed during a call.

**Important**: TypeScript allows you to declare multiple method signatures, but the implementation of the method can only be written once.

#### **Example of Method Overloading**

```typescript
class Calculator {
  // Overloaded methods
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  // Single method implementation that handles both overloads
  add(a: any, b: any): any {
    return a + b;
  }
}

let calc = new Calculator();

// Using the overloaded methods
console.log(calc.add(5, 10)); // Output: 15 (number addition)
console.log(calc.add("Hello, ", "World!")); // Output: Hello, World! (string concatenation)
```

#### **Explanation:**
- The `add` method is overloaded to accept either two `number` arguments or two `string` arguments.
- TypeScript uses the overload signatures to determine the correct return type based on the arguments passed to the method.
- The actual implementation of the `add` method can handle both types of inputs, but the method signatures help TypeScript understand the method's expected behavior for different inputs.

---

### **2. Method Overriding in TypeScript**

**Method Overriding** is when a subclass **redefines** a method that is already defined in its **parent class**. The overridden method in the subclass provides a new implementation for the method, and polymorphism allows the subclass method to be called instead of the parent method.

In **method overriding**, the method signature in the subclass **must match** the signature of the method in the parent class.

#### **Example of Method Overriding**

```typescript
class Animal {
  // Method in parent class
  speak(): void {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  // Method overriding in subclass
  speak(): void {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  // Method overriding in subclass
  speak(): void {
    console.log("Cat meows");
  }
}

let myDog = new Dog();
let myCat = new Cat();

// Calling the overridden methods
myDog.speak();  // Output: Dog barks
myCat.speak();  // Output: Cat meows
```

#### **Explanation:**
- The `Animal` class defines a `speak()` method that prints `"Animal speaks"`.
- The `Dog` and `Cat` subclasses each override the `speak()` method to print something specific to their type (`"Dog barks"` and `"Cat meows"`).
- Polymorphism allows the appropriate overridden method to be called based on the object type. Even though `myDog` and `myCat` are treated as `Animal` objects, the correct `speak()` method is called for each object based on their actual type.

---

### **Key Differences Between Method Overloading and Method Overriding**

| **Feature**                 | **Method Overloading**                                      | **Method Overriding**                                   |
|-----------------------------|-------------------------------------------------------------|---------------------------------------------------------|
| **Definition**               | Defining multiple methods with the same name but different parameter types or numbers. | Redefining a method in a subclass that already exists in the parent class. |
| **Purpose**                  | To allow the same method name to perform different operations based on input parameters. | To provide a specific implementation of a method in a subclass. |
| **Inheritance**              | Not dependent on inheritance.                              | Dependent on inheritance.                               |
| **Method Signatures**        | Multiple signatures with the same method name.             | Method signature must match the parent class method.    |
| **Example**                  | `add(a: number, b: number): number; add(a: string, b: string): string;` | `speak() { console.log("Dog barks"); }` in `Dog` overriding `speak()` in `Animal`. |
| **Return Type**              | Return type depends on the method signature.               | Return type must be the same as the parent method's return type. |

---

### **Summary**

- **Method Overloading** in TypeScript allows you to define multiple methods with the same name but different parameter types. The correct version of the method is chosen based on the arguments passed.
- **Method Overriding** occurs when a subclass provides its own implementation of a method that already exists in its parent class. It is a key feature of polymorphism, allowing behavior to be customized in subclasses.

