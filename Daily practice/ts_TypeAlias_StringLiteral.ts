//Typescript TypeAlias
type alphaNumeric = string | number;
let value: alphaNumeric = 10;
value = "Hello";
//value = false;

console.log(value);

//Typescript String literal
type MouseEventt = 'click' | 'dbClick' | 'mouseup';
let mouseEvent: MouseEventt;
mouseEvent = 'click';
//mouseEvent = 'mouseOver';

console.log(mouseEvent);