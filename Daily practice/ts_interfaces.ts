//an interface is a way to define the structure of an object.
interface Shape {
    name: string;
    color: string;
    area(): number;
}
  
//Define object structures

function calculateArea(shape: Shape): void {
    console.log(`Calculating area of ${shape.name}...`);
    console.log(`Area: ${shape.area()}`);
} 
  
const circle: Shape = {
    name: "Circle",
    color: "Red",
    area() {
      return Math.PI * 2 * 2;
    },
}; 
  
calculateArea(circle);