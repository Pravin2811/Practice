//Typescript static 
class Employee{
    protected firstName: string;
    protected lastName: string;
    private static headCount: number = 0;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
        Employee.headCount++;
    }

    getFullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string{
        return `This is ${this.firstName} ${this.lastName}`
    }

    static getEmployeeCount(): number{
        return Employee.headCount;
    }
    // getLastName(): string{
    //     return `${this.lastName}`;
    // }
};


class Staff extends Employee{
    age: number;
    degree: string;
    salary: number;

    constructor(firstName: string, lastName: string, age: number, degree: string){
        super(firstName, lastName);
        this.age = age;
        this.degree = degree;
    }

    getFullDetails(): object{
        return {
            firstName: this.firstName,
            lastName: this.getLastName(),//this.lastName,
            age: this.age,
            degree: this.degree
        }
    }

    getLastName(): string{
        return `${this.lastName}`;
    }

    describe(): any{
        return super.describe();
        //return `This is ${this.firstName} ${this.lastName} ${this.age}`;
    }
}


let ap = new Employee("ap", "ap");
let vp = new Employee("vp", "vp");
//Employee.headCount++;
console.log(Employee.getEmployeeCount());