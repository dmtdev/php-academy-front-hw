//Task 1
var pet = {
    name: '',
    age: 0,
    walk: function () {
        console.log('walking...');
    },
    sleep: function () {
        console.log('sleeping...');
    }
};

var Dog = function (furType, tailLength) {
    this.furType = furType;
    this.tailLength = tailLength;
    this.bark = function () {
        console.log('Bark!');
    }
};
Dog.prototype = pet;
Dog.prototype.constructor = Dog;

var Cat = function (furType, tailLength) {
    this.furType = furType;
    this.tailLength = tailLength;
    this.meow = function () {
        console.log('Meow..');
    }
};

Cat.prototype = pet;
Cat.prototype.constructor = Cat;

//Task 2
var Chicken = function (name, sex) {
    this.name = name;
    this._sex = sex;
    if (this._sex == 'male') {
        this.crow = function () {
            alert("Cock-A-Doodle-Doo!");
        }
    }
    else {
        this.produceEgg = function () {
            var egg = {type: null};
            return egg;
        };
    }
};
Chicken.prototype.getSex = function () {
    return this._sex;
};
var ch1 = new Chicken('ch1','male');
var ch2 = new Chicken('ch2','female');
console.log(ch1.getSex());
console.log(ch2.getSex());
