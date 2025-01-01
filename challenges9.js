function printForecast(arr) {
    let forecastStr = '';

    for (let i = 0; i < arr.length; i++) {
        forecastStr += `... ${arr[i]}ºC in ${i + 1} days `;
    }

    console.log(forecastStr + '...');
}

const data1 = [17, 21, 23];
printForecast(data1);