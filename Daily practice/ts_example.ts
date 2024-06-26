let apps: string[] = ['WhatsApp', 'Instagram', 'Facebook'];  
let playStore: string[] = [];  
  
apps.forEach((item: string)=>{
    item += "data"  
    playStore.push(item)  
});  
  
console.log(playStore);  


class Pigeon { 
    sound = "coos"; 
} 

class Owl { 
    sound = "hoots"; 
} 

class Penguin { 
    sound = "peeps"; 
    swim() { 
        console.log("I'm a bird and i can swim"); 
    }   
} 

let pigeon: Pigeon = new Owl();	 // Works 
let owl: Owl = new Pigeon();		 // Works 
let pigeon2: Pigeon = new Penguin(); // Works 
//let penguin: Penguin = new Pigeon(); // Compile time error 

// Printing values 
console.log("A pigeon " + pigeon.sound); 
console.log("An owl " + owl.sound); 
console.log("A pigeon " + pigeon2.sound); 
//console.log("A penguin " + penguin.sound);   


let greet: (a: string, b: string) => string;
    
greet = function (x:string, y:string): string{
    return x+y;
}

console.log(greet("1","3"));

let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(Object.keys(employee));