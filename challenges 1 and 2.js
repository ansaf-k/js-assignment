massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(`Body Mass Index of Mark is ${BMIMark.toFixed(2)}`);
console.log(`Body Mass Index of John is ${BMIJohn.toFixed(2)}`);

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's!`);
}
else {
    console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's!`);
}