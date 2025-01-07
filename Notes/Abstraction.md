### **Abstraction in TypeScript**

Abstraction is a fundamental OOP concept that allows you to hide the implementation details of a class and only expose the essential features or functionalities to the outside world. In TypeScript, you can achieve abstraction through **abstract classes** and **abstract methods**.

An **abstract class** cannot be instantiated directly, and it can contain abstract methods that must be implemented by subclasses.

### **Simple Example of Abstraction in TypeScript**

#### **1. Abstract Class Example**

Here is a simple example of an abstract class with an abstract method and how it is extended by a subclass:

```typescript
// Abstract class
abstract class Animal {
  // Abstract method (doesn't have a body)
  abstract sound(): void;

  // Regular method
  move(): void {
    console.log("The animal moves.");
  }
}

// Subclass that extends the abstract class
class Dog extends Animal {
  // Implementing the abstract method
  sound(): void {
    console.log("The dog barks!");
  }
}

// Subclass that extends the abstract class
class Cat extends Animal {
  // Implementing the abstract method
  sound(): void {
    console.log("The cat meows!");
  }
}

// Create instances of the subclasses
const dog = new Dog();
dog.sound();  // Output: The dog barks!
dog.move();   // Output: The animal moves.

const cat = new Cat();
cat.sound();  // Output: The cat meows!
cat.move();   // Output: The animal moves.
```

### **Explanation:**

1. **Abstract Class**: The class `Animal` is abstract and contains an abstract method `sound()`. The `sound()` method does not have a body and must be implemented by any subclass that extends the `Animal` class.
2. **Subclass Implementation**: Both `Dog` and `Cat` extend the `Animal` class and implement the abstract `sound()` method, each providing its own behavior for `sound()`.
3. **Accessing Methods**: You can create instances of the `Dog` and `Cat` classes (not the `Animal` class directly) and use both the abstract method (`sound()`) and the regular method (`move()`).

### **Key Points about Abstraction in TypeScript:**
- **Abstract Classes**: Cannot be instantiated directly; they are designed to be extended by other classes.
- **Abstract Methods**: Must be implemented in derived (sub) classes.
- **Regular Methods**: Can have implementations in the abstract class, which can be reused by subclasses.

This example demonstrates abstraction by providing a clear separation between the implementation of animal sounds and the movement functionality, while hiding unnecessary details from the outside world.