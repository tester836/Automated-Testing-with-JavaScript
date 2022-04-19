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

