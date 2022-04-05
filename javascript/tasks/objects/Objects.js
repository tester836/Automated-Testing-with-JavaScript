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
alert (sum);


function greetings() {
    if (inputName == savedName) {
        alert("Greetings, " + inputName + "!")
    } else {
        alert("No such name.")
    }
}

let savedName = "tester";
let inputName = prompt("What is your name?");
greetings(inputName);


