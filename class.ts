class Animal {
    name: string;

    constructor(name: string) {
        // super(props);
        this.name = name
    }

    run() {
        return `${this.name} is running`
    }

}


const snake = new Animal('huang')

console.log(snake.run())


class Dog extends Animal{
    bark() {
        return `${this.name} is barking`
    }
}

const hui = new Dog('hui')
console.log(hui.run())
console.log(hui.bark())

// 方法的重写

class Cat extends Animal{
    constructor(name) {
        super(name);
        console.log(this.name)
    }

    run() {
        return 'Mnow, ' + super.run()
    }

}

const maomao = new Cat('maomao')

console.log(maomao.run())
