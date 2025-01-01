// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     answers: new Array(4).fill(0), // This generates [0, 0, 0, 0].
// };

// poll.registerNewAnswer = () => {
//     const input = prompt(`${poll.question}\n${poll.options.join('\n')}\n\n (Write option number)`);
//     const userChoice = Number(input)
//     console.log(userChoice);

//     if (userChoice === null) {
//         alert("You didn't enter any value!");
//     } 
//     else if (   userChoice >= 0 && userChoice < 4 && !isNaN(userChoice)) {
//         poll.answers[userChoice]++;
//         console.log(poll.answers);
//         document.getElementById("output").textContent = poll.answers;
//     } else {
//         alert("Invalid Answer");
//     }
// }

// poll.registerNewAnswer();



// function checkDogs(dogsJulia, dogsKate) {
//     // 2. Remove cat ages from Julia's array and make a shallow copy of julia's array
//     const juliaCorrected = dogsJulia.slice(1, -2);

//     // 3. Create an array with both Julia's (corrected) and Kate's data
//     const allDogs = [...juliaCorrected, ...dogsKate];

//     // 4. Checking each dog is an adult or puppy
//     allDogs.forEach((age, index) => {
//         const dogNumber = index + 1;
//         if (age >= 3) {
//             console.log(`Dog number ${dogNumber} is an adult, and is ${age} years old`);
//         } else {
//             console.log(`Dog number ${dogNumber} is still a puppy`);
//         }
//     });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// function calcAverageHumanAge(ages) {
//     const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

//     const adults = humanAges.filter((age) => (age >= 18));
//     console.log(adults);

//     const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//     return average;
// }

// Data1 = [5, 2, 4, 1, 15, 8, 3];
// calcAverageHumanAge(Data1)

// const calcAverageHumanAge2 = (ages) => {
//     return ages
//         .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//         .filter((age) => age >= 18)
//         .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
// }

// console.log(calcAverageHumanAge2(Data1));



// challenge 18

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach((dog) => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});



// 2
// const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
// if (sarahsDog.curFood > sarahsDog.recommendedFood) {
//   console.log("Sarah's dog is eating too much.");
// } else if (sarahsDog.curFood < sarahsDog.recommendedFood) {
//   console.log("Sarah's dog is eating too little.");
// } else {
//   console.log("Sarah's dog is eating the recommended amount.");
// }


// 3
const ownersEatTooMuch = dogs.filter((dog) => dog.curFood > dog.recommendedFood).flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs.filter((dog) => dog.curFood < dog.recommendedFood).flatMap((dog) => dog.owners);


// 4
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much! and ${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);


// 5
const exactFood = dogs.some((dog) => dog.curFood == dog.recommendedFood);
console.log(exactFood);


// 6
const eatingOkayAmount = dogs.some(
    (dog) =>
        dog.curFood >= dog.recommendedFood * 0.9 &&
        dog.curFood <= dog.recommendedFood * 1.1
);
console.log(eatingOkayAmount);


// 7
const dogsEatingOkay = dogs.filter(
    (dog) =>
        dog.curFood >= dog.recommendedFood * 0.9 &&
        dog.curFood <= dog.recommendedFood * 1.1
);
console.log(dogsEatingOkay);