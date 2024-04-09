abstract class Vehicle {
    make: string;
    model: string;
    year: number;
    static type: string = "bs6";

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    abstract start(): void;
    abstract stop(): void;
    abstract accelerate(): void;
}

class Car extends Vehicle {
    start(): void {
        console.log(`${this.year} ${this.make} ${this.model} started.`);
    }

    stop(): void {
        console.log(`${this.year} ${this.make} ${this.model} stopped.`);
    }

    accelerate(): void {
        console.log(`${this.year} ${this.make} ${this.model} is accelerating.`);
    }
}

class Truck extends Vehicle {
    start(): void {
        console.log(`${this.year} ${this.make} ${this.model} started.`);
    }

    stop(): void {
        console.log(`${this.year} ${this.make} ${this.model} stopped.`);
    }

    accelerate(): void {
        console.log(`${this.year} ${this.make} ${this.model} is accelerating.`);
    }
}

class Motorcycle extends Vehicle {
    start(): void {
        console.log(`${this.year} ${this.make} ${this.model} started.`);
    }

    stop(): void {
        console.log(`${this.year} ${this.make} ${this.model} stopped.`);
    }

    accelerate(): void {
        console.log(`${this.year} ${this.make} ${this.model} is accelerating.`);
    }
}

const car = new Car('Toyota', 'Corolla', 2020);
car.start();
car.accelerate();
car.stop(); 
console.log(Vehicle.type);