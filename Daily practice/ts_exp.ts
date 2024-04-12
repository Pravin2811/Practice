let mobile: number = 7904721542

let persons: any = [
    {
        "name":"kumar",
        "mobile": 7904721542
    },
    {
        "name":"ewrw",
        "mobile":5454345454
    }
]

let modArr: any = [];
// for(let i of persons){

//     if(i.mobile === mobile){
//         persons.splice(persons.indexOf(i),1);
//     }
// }
let j = 0;
for(let i of persons){
    if(i.mobile !== mobile){
        //persons.splice(persons.indexOf(i),1);
        modArr[j] = persons[persons.indexOf(i)];
        //modArr.push(persons[i])
        j++;
    }
}

console.log(persons);
console.log(modArr)


let arr = ["ere", "rfwfw", "sdfde", undefined];
//arr[6] = "sdfd";
console.log(arr.length);

let str = "\uD38F\uD38F";
console.log(str.length);

let n: string = "";
if(!n) console.log("n")

let a = [ '1', '2', '3', '4', '5', '6', '7', '8'];
let b = a;
b.push(b.splice(5,1)[0]);
let c = b.slice(3, -2);
console.log(a);
console.log(b);
console.log(c);

const x = '32';
const y = +x;
console.log(y);
console.log(typeof y, ',', typeof x);