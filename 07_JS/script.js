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
    var sex = sex;
    if (sex == 'male') {
        Chicken.prototype.crow = function () {
            alert("Cock-A-Doodle-Doo!");
        }
    }
    else {
        Chicken.prototype.produceEgg = function () {
            var egg = {type: null};
            return egg;
        };
    }
};
Chicken.prototype.getSex = function () {
    return this.sex;
};


