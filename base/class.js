var Animal = /** @class */ (function () {
    function Animal(name) {
        // super(props);
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var dog = new Animal('huang');
console.log(dog.run());
