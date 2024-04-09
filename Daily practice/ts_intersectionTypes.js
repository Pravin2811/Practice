var obj1 = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
console.log(obj1.teacher_Id);
console.log(obj1.name);
var obj3 = {
    feauA: "20",
    feauB: "89"
};
var obj4;
// Error, Type '20' is not assignable 
// to type 'string & number' 
//obj3.feauA = '20'; 
console.log(obj3.feauA, obj3.feauB);
// obj4.feauA = "c"; 
// console.log(obj4.feauA);
