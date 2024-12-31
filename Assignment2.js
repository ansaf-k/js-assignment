// // 1

const country = 'india';
const continent = 'asia';
let population = 100;
const capitalCity = 'delhi';
// console.log(continent, country, population);


// // 2

// const isIsland = false;
// let language;
// language = 'hindi';
// // console.log(isIsland, country, language, population);

// console.log(population + 1)


// var Finland = 6000000;
// if (Finland < population) {
//     console.log('Finland has a smaller population than India');
// }
// else {
//     console.log('India has a smaller population than Finland');
// }

// //average population
// if (33000000 < population) {
//     console.log('average population of a country has a smaller population than India');
// }
// else {
//     console.log('India has a smaller population than average population of a country');
// }

// var description = `Portugal is in Europe, and its 11 million people speak portuguese`;
// console.log(description);



// if (33000000 < population) {
//     console.log(`Portugal's population is above average`);
// }
// else {
//     console.log(`Portugal's population is 22 million below average`);
// }

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// if (numNeighbours !== null)  {
//     document.getElementById("demo").innerHTML = 
//     "Total " + numNeighbours + " neighbours";
// }

// if(numNeighbours === 1) {
//     console.log('Only 1 border!');
// } 
// else if(numNeighbours > 1) {
//     console.log('More than 1 border!');
// }
// else {
//     console.log('No borders!');
// }


// Write a function called describeCountry which takes three parameters:
// country, population and capitalCity. Based on this input, the function returns
// a string with this format: 'Finland has 6 million people and its capital city is
// Helsinki'
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const india = describeCountry(country, population, capitalCity)
// const australia = describeCountry('australia', 12, 'swidney')
// const china = describeCountry('china', 20, 'chu-man')

// // console.log(india);

const percentageOfWorld1 = (population) => {
    return (population / 7900) * 100;
}
// percentageOfWorld3(population)


// const describePopulation = (country, population) => {
//     return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)} ofthe world.`;
// }

// describePopulation(country, population);

let populations = [160, 90, 140, 100];

// console.log(populations.length == 4);

// const percentages = populations.map(percentageOfWorld3);
// console.log(percentages);

// const neighbours = ['pakistan', 'bhutan', 'germany','sreelankan', 'nepal'];

// neighbours.push('utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('germany')) {
//     console.log('Probably not a central European country');
// }

// neighbours[3] = 'sri lanka'
// console.log(neighbours);


// const myCountry = {
//     country: 'India',
//     capital: 'Delhi',
//     language: 'Hindi',
//     population: 142,
//     neighbours: ['pakistan', 'bhutan', 'germany', 'sri lanka', 'nepal']
// }

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring
// countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring
//     countries and a capital called ${myCountry.capital}.`);

// myCountry['population'] -= 2;

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring
//         countries and a capital called ${myCountry.capital}.`);

// myCountry.describe = function () {
//     console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring
//         countries and a capital called ${this.capital}.`);
// }
// // myCountry.describe();

// myCountry.checkIsland = function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
// }

// myCountry.checkIsland();
// console.log(myCountry);

const percentages2 = populations.map(percentageOfWorld1)
console.log(percentages2);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++)
        console.log(`Neighbours : ${listOfNeighbours[i][j]}`);
}

let i=0;
const percentage3 = [];

while (i < listOfNeighbours.length) {
    percentage3.push(percentageOfWorld1(populations[i]).toFixed(2));
    i++;
}
console.log(percentage3);