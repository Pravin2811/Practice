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
var arr = ["ere", "rfwfw", "sdfde", undefined];
//arr[6] = "sdfd";
console.log(arr.length);
var str = "\uD38F\uD38F";
console.log(str.length);
var n = "";
if (!n)
    console.log("n");
var a = ['1', '2', '3', '4', '5', '6', '7', '8'];
var b = a;
b.push(b.splice(5, 1)[0]);
var c = b.slice(3, -2);
console.log(a);
console.log(b);
console.log(c);
var x = '32';
var y = +x;
console.log(y);
console.log(typeof y, ',', typeof x);
