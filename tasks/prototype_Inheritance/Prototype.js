class Animal {
    constructor(name) {
        this.name = name
        this.move = true
    }
}
let animal = new Animal()

function Cat (name) {
    this.name = name
}

Cat.prototype = animal

catBars = new Cat("Bars")
console.log(catBars.move)
    