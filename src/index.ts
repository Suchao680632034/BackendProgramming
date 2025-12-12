let Score:number = 75;
if(Score >= 80){
    console.log("A");
}else if(Score >= 60){
    console.log("B");
}else if(Score >= 50){
    console.log("C");
}else{
    console.log("F");
}



import addition, {subtraction} from "./funtion";
// const addition = (a,b) => { return a + b};
// console.log(addition(15 , 25)); 
const result = addition(15 , 25)+0;
console.log(result,"Type of result is", typeof result);

const result2 = subtraction(1 , 2)+0;
console.log(result2,"Type of result2 is", typeof result2);

import FindMax from "./function2";
const maxValue = FindMax([10, 20, 30, 40, 50]);
console.log(maxValue, "is the maximum value in the array.");

const object= {name: "John", age: 30,city : "New York",grade: 3};  
console.log(object.name);

const jsonString = JSON.stringify(object);
console.log("Object",object);
console.log("JSON String:",jsonString);

interface Student {
    name: string;
    age: number;
    grade: number;
}

function StudentStatus(Student: Student): string {
    if (Student.grade>2) {   
    return JSON.stringify(Student) ;    
    }else {
      return `คุณ ${Student.name} พ้นสภาพ.`;
    }
}
    
const student1 = {name: "สมชาย", age: 20, grade: 1};
console.log(StudentStatus(student1));

const student2 = {name: "สมศรี", age: 22, grade: 3};
console.log(StudentStatus(student2));

