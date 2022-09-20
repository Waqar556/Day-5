//Program 1 
let number1= 56;
let number2=56;
let addition=number1+number2;
let subtraction=number1-number2;
let multiply=number1*number2;
let divide=number1/number2;

console.log("Addition:"+addition);
console.log("Subtraction:"+subtraction);
console.log("Multiply:"+multiply);
console.log("Divide:"+divide);

var check1;
check1=(number1==number2);
console.log("Check'==':"+check1);
var check2;
check2=(number1===number2);
console.log(check2);

//Program 2 print Object

let employee ={
    name:"Ali khan", age:21, cnic:"3451255122154"
}
console.log(employee);

//program 3 Sorting an array
let number=[1,48,785,952,56,545,65,25,1,6,41];
let length=number.length;
let temp;

for(var i=0; i<length-1; i++){
    if (number[i]>number[i+1]) {
        temp=number[i];
        number[i]=number[i+1];
        number[i+1]=temp;
        i=-1;
    }
}
console.log(number);