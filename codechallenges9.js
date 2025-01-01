const printForecast = (arr) => {
    let text = '';
    for (let i = 0; i < arr.length; i++) {
        text += `... ${arr[i]}°C in ${i + 1} days `
    }
    console.log(text);
}

data = [17,21,23];
printForecast(data);