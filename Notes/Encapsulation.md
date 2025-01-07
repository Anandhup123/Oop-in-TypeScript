### **Encapsulation in TypeScript**

**Encapsulation** is an object-oriented programming (OOP) concept that restricts direct access to some of an object's components. It helps to bundle the data (properties) and methods (functions) that operate on the data into a single unit or class. Encapsulation also hides the internal state of an object and only exposes a controlled interface for interaction.

In TypeScript, you can achieve encapsulation using **access modifiers** (`public`, `private`, and `protected`), which control the visibility of the class's properties and methods.

### **Encapsulation Example in TypeScript**

In this example, we will create a class with private properties and methods. We'll expose a public method to interact with those properties in a controlled manner.

#### **Simple Example of Encapsulation**

```typescript
class BankAccount {
  // Private property
  private balance: number;

  // Constructor to initialize the balance
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Public method to deposit money
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  // Public method to withdraw money
  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    } else {
      console.log('Invalid withdrawal amount.');
    }
  }

  // Public method to get the balance (getter)
  getBalance(): number {
    return this.balance;
  }
}

// Create an instance of BankAccount
let account = new BankAccount(1000);

// Access public methods
account.deposit(500);  // Output: Deposited 500. New balance is 1500.
account.withdraw(200); // Output: Withdrew 200. New balance is 1300.
console.log(account.getBalance()); // Output: 1300

// Trying to access private property directly will cause an error
// console.log(account.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
```

### **Explanation:**
1. **Private Property**: The `balance` property is marked as `private`, meaning it cannot be accessed directly from outside the class. This is the core of encapsulation — the internal state (the balance) is hidden from the outside.

2. **Public Methods**:
   - `deposit()`: A method to deposit money into the account. It checks if the deposit amount is positive before modifying the balance.
   - `withdraw()`: A method to withdraw money, with a check to ensure the withdrawal is valid (positive and less than or equal to the current balance).
   - `getBalance()`: A getter method that allows external access to the `balance`, but only through a controlled interface.

3. **Encapsulation**:
   - The internal details of the `balance` are hidden, and users of the class can only interact with the `deposit()`, `withdraw()`, and `getBalance()` methods.
   - You cannot directly access or modify the `balance` property from outside the class, which protects the integrity of the data.

### **Access Modifiers in TypeScript:**
- **`private`**: Properties or methods declared as `private` cannot be accessed outside the class.
- **`public`**: Properties or methods declared as `public` are accessible from anywhere.
- **`protected`**: Properties or methods declared as `protected` are accessible within the class and subclasses (but not outside).

### **Key Benefits of Encapsulation:**
- **Data Protection**: It protects the integrity of an object's state by restricting direct access to its internal properties.
- **Controlled Access**: Only specific methods are provided for interacting with the internal data, ensuring data consistency and validation.
- **Maintainability**: Encapsulation allows for changes to the internal workings of a class without affecting how other parts of the program interact with the class.

