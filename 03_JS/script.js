var o1 = {
    'f1': 'v1',
    'f2': 'v2',
    'f3': 100
};

var o2 = {
    'f5': 'v1',
    'f2': 'v2o',
    'f3': 10000
};
//1
function merge(firstObject, secondObject) {
    var resultObject = {};
    for(var key in firstObject){
        resultObject[key] = firstObject[key];
    }
    for (var key in secondObject) {
        resultObject[key] = secondObject[key];
    }
    return resultObject;
}

console.log(merge(o1,o2));

var sportsmen = [
    {name:"Yan", age: 34},
    {name:"Van", age: 30},
    {name:"Ivan", age: 22},
    {name:"Dilan", age: 31},
    {name:"Vlad", age: 37},
    {name:"Adelaida", age: 22}
];

//2
function topOldest(menlist, limit) {
    var winners = [];

    menlist.sort(function (a,b) {
        if (a.age > b.age)
            return -1;
        if (a.age < b.age)
            return 1;
        return 0;
    });

    for (var i = 0; i < limit; i++) {
        winners.push(menlist[i].name);
    }

    return winners;
}
console.log(topOldest(sportsmen, 3));

//3

//4
var spammer = {
    startSpam: function (str) {
        this.spamText.push(str);
    },
    stopSpam: function (str) {
        this.spamText[this.spamText.indexOf(str)] = undefined;
        this.spamText = this.spamText.filter(function (elem) {
            if (elem) {
                return elem;
            }
        });
    },
    action: function () {
        if (this.spamText.length > 0) {
            for (var i = 0; i < this.spamText.length; i++) {
                console.log(this.spamText[i]);
            }
        }
    },
    spamText: []
};
setInterval(function () {
    spammer.action();
}, 1000);

//5

//6

var password = "YTFiMmMz";
function bruteForce(psswrd) {
    // ...
    var encodedVariant = btoa(variant);
    // ...
}
console.log(bruteForce(password));


console.log((111111).toString(13));
console.log((2587).toString(13));
console.log((254511).toString(13));

