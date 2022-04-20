const nextTaskText = "\n-------next task-------";

let movies = [
    'movie1',
    'movie2',
    'movie3'
];
$.each(movies, function (index, value){
    console.log(index + ': ' + value);
});
console.info(nextTaskText);

let carsArray = ['vaz', 'bmw', 'kamaz'];
let carsToString = carsArray.join('+');
console.log(carsToString);
let carsToArray = carsToString.split('+');
console.log(carsToArray);
console.info(nextTaskText);

let friends = ['John', 'Ivan', 'Bill'];
let helloFriends = friends.map((name) => 'hello ' + name);
console.log(helloFriends);
console.info(nextTaskText);

const array = [1,6,7,8,3,4,5,6];
console.log(Boolean(array));
console.info(nextTaskText);

let descSortedArray = array.sort((a, b) => b - a);
console.log(descSortedArray); 
console.info(nextTaskText);

let filteredArray = array.filter(num => num > 3);
console.log(filteredArray);
console.info(nextTaskText);

function indexOfNumber(arr, num) {
    return arr.indexOf(num);
}
console.log(indexOfNumber([1,6,7,8,3,4,5,6], 3));
console.info(nextTaskText);

let a = 15;
while (a >= 10) {
    console.log (a--);
}
console.info(nextTaskText);

function isPrimeNumber() {
    let flag = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            flag = false;
            break; 
        }
    }
    if (flag && number > 1 && Number.isInteger(number)) {
        return number
    }
}
for (number = 0; number < 111; number++) {
    if (isPrimeNumber(number)) {
        console.log (number)
    }
}
console.info(nextTaskText);

for (let num = 0; num < 20; num++) {
    if (num% 2) {
        console.log (num++);
    }
}