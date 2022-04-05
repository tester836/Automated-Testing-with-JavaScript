let car = {
    color: "black",
}
alert(car.color)

car.color = "green";
alert(car.color)

car.power = "180 HP"
function power() {
    console.info("Car power:", car.power)
}
power();


function sumOfFruits(apple, pear) {
   return apple + pear;
}
let sum = sumOfFruits(35, 44);
console.log ("The sum of fruits: ", sum);


function greetings() {
    if (inputName.trim() == savedName) {
        alert("Greetings, " + inputName.trim() + "!")
    } else {
        alert("No such name.")
    }
}

let savedName = "tester";
let inputName = prompt("What is your name?");
greetings(inputName);


function typeOfArgument(inputArgument) {
    console.log ("Argument type: ", typeof inputArgument);
}
typeOfArgument();
typeOfArgument(NaN);
typeOfArgument(2.3);
typeOfArgument(Symbol());
typeOfArgument(true);
typeOfArgument("");
typeOfArgument(alert);
typeOfArgument(null);


function isPrimeNumber(inputNumber) {
    let flag = true;
    for (let i = 2; i < inputNumber; i++) {
        if (inputNumber % i == 0) {
            flag = false;
            break; 
        }
    }
    if (flag && inputNumber > 1 && Number.isInteger(inputNumber)) {
        alert("The number is prime.")
    } else {
        alert("The number is not a prime.")
    }
}

let inputNumber = Number(prompt("Enter the number, please."));
isPrimeNumber(inputNumber);
