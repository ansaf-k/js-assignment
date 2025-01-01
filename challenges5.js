const calcAverage = (a,b,c) => (a + b + c) / 3;


scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(21,34,27).toFixed(2);

const checkWinner =  (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
    }
    else {
        console.log("No team wins...");
    }
}
checkWinner(scoreDolphins, scoreKoalas);