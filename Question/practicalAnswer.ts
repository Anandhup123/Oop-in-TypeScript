// Abstract base class: Vehicle
abstract class Vehicle {
	constructor(public make: string, public model: string) {}

	// Abstract method to be implemented by derived classes
	abstract getDetails(): string;
  }

  // Derived class: Car
  class Car extends Vehicle {
	constructor(
	  make: string,
	  model: string,
	  public seatingCapacity: number,
	  public fuelType: string
	) {
	  super(make, model); // Call the base class constructor
	}

	// Implement the abstract method
	getDetails(): string {
	  return `Car Details:
	  Make: ${this.make}
	  Model: ${this.model}
	  Seating Capacity: ${this.seatingCapacity}
	  Fuel Type: ${this.fuelType}`;
	}
  }

  // Derived class: Truck
  class Truck extends Vehicle {
	constructor(
	  make: string,
	  model: string,
	  public payloadCapacity: number,
	  public wheels: number
	) {
	  super(make, model); // Call the base class constructor
	}

	// Implement the abstract method
	getDetails(): string {
	  return `Truck Details:
	  Make: ${this.make}
	  Model: ${this.model}
	  Payload Capacity: ${this.payloadCapacity} tons
	  Wheels: ${this.wheels}`;
	}
  }

  // Object creation
  const myCar = new Car("Toyota", "Corolla", 5, "Petrol");
  const myTruck = new Truck("Volvo", "FH16", 18, 6);

  // Display details
  console.log(myCar.getDetails());
  console.log(myTruck.getDetails());
