var mobile = 7904721542;
var persons = [
    {
        "name": "kumar",
        "mobile": 7904721542
    },
    {
        "name": "ewrw",
        "mobile": 5454345454
    }
];
var modArr = [];
// for(let i of persons){
//     if(i.mobile === mobile){
//         persons.splice(persons.indexOf(i),1);
//     }
// }
var j = 0;
for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
    var i = persons_1[_i];
    if (i.mobile !== mobile) {
        //persons.splice(persons.indexOf(i),1);
        modArr[j] = persons[persons.indexOf(i)];
        //modArr.push(persons[i])
        j++;
    }
}
console.log(persons);
console.log(modArr);