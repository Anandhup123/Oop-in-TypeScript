### **Simple Example of Properties and Behavior in TypeScript**

In this example, we will create a simple `Person` class. The **properties** will store the name and age of the person, and the **behavior** will be a method to introduce the person.

### **Code Example:**

```typescript
class Person {
  // Properties (data)
  name: string;
  age: number;

  // Constructor to initialize properties
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Behavior (method)
  introduce(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create an instance of Person
let person1 = new Person("Alice", 25);

// Access properties
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 25

// Call the method (behavior)
person1.introduce(); // Output: Hello, my name is Alice and I am 25 years old.
```

### **Explanation:**

1. **Properties:**
   - `name`: This is a property that holds the name of the person.
   - `age`: This is a property that holds the age of the person.

   These properties store the data or state of the `Person` object.

2. **Behavior (Method):**
   - `introduce()`: This is a method (behavior) that prints a message introducing the person. The message includes the `name` and `age` properties.

   This method defines an action that the `Person` can perform.

### **Summary:**
- **Properties** store data about the object (`name` and `age`).
- **Behavior** is defined by methods (`introduce()`), which describe what the object can do.

This is a very simple example that shows how properties and behavior work together in a TypeScript class.