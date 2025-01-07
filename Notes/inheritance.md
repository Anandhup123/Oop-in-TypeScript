### **Inheritance in TypeScript**

Inheritance is a key concept in object-oriented programming (OOP) that allows one class (the **child class**) to inherit properties and methods from another class (the **parent class**). This allows for code reuse and the creation of more specialized versions of existing classes.

In TypeScript, inheritance is implemented using the `extends` keyword.

### **Basic Inheritance Example:**

1. **Parent Class (Base Class)**: The class from which properties and methods are inherited.
2. **Child Class (Derived Class)**: The class that inherits properties and methods from the parent class.

### **1. Simple Inheritance Example**

```typescript
// Parent class
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Method in the parent class
  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class inheriting from Animal
class Dog extends Animal {
  constructor(name: string) {
    super(name);  // Call the parent class constructor
  }

  // Method in the child class (overriding the parent method)
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy');
dog.speak();  // Output: Buddy barks.
```

### **Key Points:**
- The **`Dog`** class **extends** the **`Animal`** class, meaning it inherits all the properties and methods of the `Animal` class.
- The `Dog` class has access to the `name` property and the `speak()` method of the `Animal` class.
- The **`super()`** function is used to call the constructor of the parent class.

### **2. Inheritance with Constructors**

The child class can call the constructor of the parent class using the `super()` method. This allows you to initialize the properties of the parent class.

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

class Bird extends Animal {
  constructor(name: string) {
    super(name);  // Call the parent class constructor
  }

  fly(): void {
    console.log(`${this.name} is flying.`);
  }
}

const bird = new Bird('Eagle');
bird.move();  // Output: Eagle is moving.
bird.fly();   // Output: Eagle is flying.
```

### **3. Overriding Methods**

The child class can override methods of the parent class. In the example below, the `speak()` method is overridden in the `Dog` class.

```typescript
class Animal {
  speak(): void {
    console.log('Animal makes a sound.');
  }
}

class Dog extends Animal {
  speak(): void {
    console.log('Dog barks.');
  }
}

const animal = new Animal();
animal.speak();  // Output: Animal makes a sound.

const dog = new Dog();
dog.speak();  // Output: Dog barks.
```

### **4. Access Modifiers and Inheritance**

Access modifiers like `public`, `private`, and `protected` control how members are inherited and accessed in the child class.

- **`public`** members are accessible anywhere, including in the child class.
- **`private`** members are only accessible within the class where they are declared and cannot be inherited.
- **`protected`** members are accessible within the class and its subclasses.

```typescript
class Animal {
  public name: string;
  private age: number;
  protected type: string;

  constructor(name: string, age: number, type: string) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  public displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Type: ${this.type}`);
  }
}

class Dog extends Animal {
  constructor(name: string, age: number, type: string) {
    super(name, age, type);
  }

  showType(): void {
    console.log(`This is a ${this.type}.`);  // Accessing protected member
  }
}

const dog = new Dog('Buddy', 3, 'Golden Retriever');
dog.displayInfo();  // Output: Name: Buddy, Age: 3, Type: Golden Retriever
dog.showType();  // Output: This is a Golden Retriever.
```

### **5. Method Overloading with Inheritance**

You can also overload methods in the child class, which means you can provide different versions of a method in the child class.

```typescript
class Animal {
  speak(): void {
    console.log('Animal speaks.');
  }
}

class Dog extends Animal {
  speak(version: string): void;  // Overloading the method signature

  speak(): void {
    console.log('Dog barks.');
  }

  speak(version: string): void {  // Overloading method implementation
    if (version === 'loud') {
      console.log('Dog barks loudly!');
    } else {
      console.log('Dog barks softly.');
    }
  }
}

const dog = new Dog();
dog.speak();  // Output: Dog barks.
dog.speak('loud');  // Output: Dog barks loudly!
```

### **Summary:**
- **Inheritance** allows a class to inherit properties and methods from another class, enabling code reuse.
- Use the **`extends`** keyword to create a subclass.
- The **`super()`** function calls the parent class constructor.
- Methods can be **overridden** in the child class.
- **Access modifiers** (public, private, protected) control the visibility and inheritance of class members.
