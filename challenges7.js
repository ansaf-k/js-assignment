const mark = {
    fullName : "Mark Miller's",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        markBMI = mark.mass/(mark.height * mark.height);
        return markBMI
    }
}
const john = {
    fullName : "John Smith's",
    mass: 98,
    height: 1.96,
    calcBMI: function(){
        johnBMI = john.mass/(john.height * john.height);
        return johnBMI
    }
}


if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName} BMI (${markBMI.toFixed(2)}) is higher than${john.fullName} (${johnBMI.toFixed(2)})!`);
}
else{
    console.log(`${john.fullName} BMI (${johnBMI.toFixed(2)}) is higher than ${mark.fullName} (${markBMI.toFixed(2)})!`);
}
