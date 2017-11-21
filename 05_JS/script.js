console.log('Task 1');
var Runner = function () {
    this.medals = [];
};
Runner.medalTypes = [];
Runner.medalTypesCounter = 0;
Runner.giveMedal = function (runner, medal) {
    if (this.medalTypes.indexOf(medal) == -1) {
        this.medalTypesCounter++;
        this.medalTypes[this.medalTypesCounter] = medal;
        runner.medals.push(this.medalTypesCounter);
    }
    else {
        runner.medals.push(this.medalTypes.indexOf(medal));
    }
};

var runner1 = new Runner;
var runner2 = new Runner;

Runner.giveMedal(runner1, 'Gold, 1000 m');
Runner.giveMedal(runner1, 'Silver, 500 m');
Runner.giveMedal(runner1, 'Gold, 1000 m');
console.log(runner1.medals); // 1,2,1

Runner.giveMedal(runner2, 'Silver, 500 m');
Runner.giveMedal(runner2, 'Silver, 800 m');
console.log(runner2.medals); // 2,3

console.log('Task 2');
var Car = function (brand) {
    this.brand = brand;
    this.wheels = 4;
};
Car.makeOtherWheelsCountCar = function (brand, wheelsCount) {
    var car = new Car(brand);
    car.wheels = wheelsCount;
    return car;
};
var car1 = new Car('ford');
console.log(car1);
var car2 = Car.makeOtherWheelsCountCar('Truck', 8);
console.log(car2);

console.log('Task 3');

var Runner = function (name, medals) {
    this.name = name;
    this.medals = medals;
};
var runner = new Runner('jon', [1]);

var Player = function (ticketCount, prizesSum) {
    this.ticketCount = ticketCount;
    this.prizeSum = prizesSum;
    this.getPrize = function (player, sum) {
        player.payedSum = sum;
    };
};
//Player.getPrize =

var player = new Player(10, 100);
player.getPrize(player, 1000);
console.log(player);

player.getPrize.call(runner, runner, 1000);
console.log(runner);

console.log('Task 4');
var Arr = {};
for (var i = 0; i < 5; i++) {
    Arr[i] = Math.round(10 + Math.random() * (99 - 10));
}
Arr.length = 5;

Arr.sort = function () {
    for (var i = 0; i < this.length - 1; i++) {
        var minMod = this[i] % 10;
        for (var j = i + 1; j < this.length; j++) {
            if (this[j] % 10 < minMod) {
                var tmp = this[i];
                minMod = this[j] % 10;
                this[i] = this[j];
                this[j] = tmp;
            }
        }
    }
};
console.log(Arr);
Arr.sort();
console.log(Arr);
Arr.tmpSort = Arr.sort;
Arr.sort = [].sort;
Arr.sort(function (a, b) {
    return a < b;
});
console.log(Arr);
Arr.sort = Arr.tmpSort;

console.log('Task 5');
var arr = [1,
    2,
    'abc',
    {a: 2, b: 4}
];

var decorInput = function (f) {
    return function () {
        for (var prop in arguments) {
            if (typeof arguments[prop] == 'string') {
                arguments[prop] = arguments[prop].length;
            }
            if (typeof arguments[prop] == 'object') {
                for (var k in arguments[prop]) {
                    if (typeof arguments[prop][k] == 'number') {
                        arguments[prop] = arguments[prop][k];
                    }
                }

            }
            else{
                arguments[prop] = 0;
            }
        }
        var result = f.apply(this, arguments);
        return result;
    }
};
Math.max = decorInput(Math.max);
console.log(Math.max.apply(null, arr));


