const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard', 'Martinez', 'Alaba',
    'Davies', 'Kimmich', 'Goretzka', 'Coman',
    'Muller',
    'Gnarby', 'Lewandowski',
    ], [
    'Burki',
    'Schulz', 'Hummels', 'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };

const [players1,players2] = game.players

console.log(players1);

// //     // console.log(players1);
// //     // console.log(players2);

// //     const gk = players1[0]
// //     const fieldPlayers = players1.slice(1);

// //     const allPlayers = [...players1,...players2]

// //     const players1Final = [...players1,"Thiago","Coutinho","Perisic"]

// //     // console.log(players1Final);

// //     const team1 = game.odds.team1
// //     const draw = game.odds.x
// //     const team2 = game.odds.team2

// //     const MinOdd = Math.min(team1,team2,draw)
// //     console.log(MinOdd);
// //     console.log(`The team most chance to win is ${MinOdd === team1 ? game.team1 : game.team2}`);

    
 



//     //coding challenges 15
//     function checkDogs(dogsJulia, dogsKate){

//         const dogsJuliaCorrected = dogsJulia.slice(1,-2);

//         const allDogs = [...dogsJuliaCorrected,...dogsJulia]

//         allDogs.forEach((dog,i) => {
//             if (dog >= 3) {
//                 console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
//             }
//             else{
//                 console.log(`Dog number ${i+1} is a puppy, and is ${dog}`);
//             }
//         })

//     }

//     const dogsJulia1 = [3, 5, 2, 12, 7];
//     const dogsKate1 = [4, 1, 15, 8, 3];

//     checkDogs(dogsJulia1,dogsKate1);
    