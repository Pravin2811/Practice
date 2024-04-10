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