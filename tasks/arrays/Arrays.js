let movies = [
    'movie1',
    'movie2',
    'movie3'
];
$.each(movies, function (index, value){
    console.log(index + ': ' + value);
});


let carsArray = ['vaz', 'bmw', 'kamaz'];
let carsToString = carsArray.join('+');
console.log(carsToString);
let carsToArray = carsToString.split('+');
console.log(carsToArray);


let friends = ['John', 'Ivan', 'Bill'];
let helloFriends = friends.map((name) => 'hello ' + name);
console.log(helloFriends);


const array = [1,6,7,8,3,4,5,6];
console.log(Boolean(array));


let descSortedArray = array.sort((a, b) => b - a);
console.log(descSortedArray); 


let filteredArray = array.filter(num => num > 3);
console.log(filteredArray);


function indexOfNumber(arr, num) {
    return arr.indexOf(num);
}
console.log(indexOfNumber([1,6,7,8,3,4,5,6], 3));


let a = 20;
while (a >= 10) { 
    console.log(a);
    a--;
}


function isPrimeNumber() {
    let flag = true;
    for (let i = 2; i < inputNumber; i++) {
        if (inputNumber % i == 0) {
            flag = false;
            break; 
        }
    }
    if (flag && inputNumber > 1 && Number.isInteger(inputNumber)) {
        return inputNumber
    }
    else {
        return "";
    }
}

let inputNumber = 0;
while (inputNumber <= 100) {
    console.log(isPrimeNumber(inputNumber));
    inputNumber++
}


let num = 0;
while (num < 100) {
    num++
    if (num%2) {
        console.log(num);
    }
}