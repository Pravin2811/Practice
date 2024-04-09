interface Student { 
    student_id: number; 
    name: string; 
} 
    
interface Teacher { 
    teacher_Id: number; 
    teacher_name: string; 
} 
    
type intersected_type = Student & Teacher; 
    
let obj1: intersected_type = { 
    student_id: 3232, 
    name: "rita", 
    teacher_Id: 7873, 
    teacher_name: "seema",
}; 
    
console.log(obj1.teacher_Id); 
console.log(obj1.name);

interface A { 
    feauA: string | number; 
    feauB: string; 
} 
    
interface B { 
    feauA: number|string; 
    feauB: string; 
} 
    
type AB = A & B; 
    
let obj3: AB = {
    feauA: 20,
    feauB: "89"
}; 
let obj4: AB; 
    
// Error, Type '20' is not assignable 
// to type 'string & number' 
//obj3.feauA = '20'; 
console.log(obj3.feauA, obj3.feauB); 
    
// obj4.feauA = "c"; 
// console.log(obj4.feauA);
    