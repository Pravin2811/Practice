class Animal {
    eat(): void {
      console.log('Eating...');
    }

    bark(): void {
        console.log('bark!');
    }
}
  
class Dog extends Animal {
    bark(): void {
      console.log('Woof!');
    }

    sleep(): void {
        console.log('sleep!');
    }
}
  
//const animal: Animal = new Dog();
//const dog = animal as Dog;
//animal.eat();

//const animal: Animal = new Dog();
//const animal = dog as Animal;
//dog.bark();

//const dog: Dog = new Animal();

// 1. any and unknown
// let stringVariable: string = 'string'
// let anyVariable: any
// let unknownVariable: unknown

//anyVariable = stringVariable;
//unknownVariable = stringVariable
//stringVariable = anyVariable;
//stringVariable = unknownVariable

//console.log(stringVariable);

// 2. `never` 
let stringVariable: string = 'string'
let anyVariable: any
let neverVariable: never

// neverVariable = stringVariable
// neverVariable = anyVariable
// anyVariable = neverVariable
// stringVariable = neverVariable

// 3. `void` pt. 1
let undefinedVariable: undefined 
let voidVariable: void
let unknownVariable: unknown

// voidVariable = undefinedVariable
// undefinedVariable = voidVariable
// voidVariable = unknownVariable

// 4. `void` pt. 2

function fn(cb: () => void): void {
    return cb()
}

fn(()=> 'string')