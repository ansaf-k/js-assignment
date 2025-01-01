const calcTip = (bill) => {
    return (bill <= 300 && bill >=50) ? (bill * 0.15) : (bill * 0.20);
}
console.log(calcTip(100)); // example

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],]

console.log(`bill is ${bills}`);
console.log(`tip is ${tips}`);
console.log(`total of bill and top ${totals}`);