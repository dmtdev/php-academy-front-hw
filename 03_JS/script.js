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
    for (var key in firstObject) {
        resultObject[key] = firstObject[key];
    }
    for (var key in secondObject) {
        resultObject[key] = secondObject[key];
    }
    return resultObject;
}

console.log(merge(o1, o2));

var sportsmen = [
    {name: "Yan", age: 34},
    {name: "Van", age: 30},
    {name: "Ivan", age: 22},
    {name: "Dilan", age: 31},
    {name: "Vlad", age: 37},
    {name: "Adelaida", age: 22}
];

//2
function topOldest(menlist, limit) {
    var winners = [];

    menlist.sort(function (a, b) {
        if (a.age > b.age) {
            return -1;
        }
        if (a.age < b.age) {
            return 1;
        }
        return 0;
    });

    for (var i = 0; i < limit; i++) {
        winners.push(menlist[i].name);
    }

    return winners;
}

console.log(topOldest(sportsmen, 3));

//3
function addMedals(winner, type, count) {
    if (!winner.medals) {
        winner.medals = {};
    }
    if (winner.medals[type]) {
        winner.medals[type] += count;
    }
    else {
        winner.medals[type] = count;
    }
}

//4
var spammer = {
    startSpam: function (str) {
        this.spamStrings.push(str);
        if (!this.interval) {
            this.interval = setInterval(function (action, strings) {
                action(strings);
            }, this.intervalTime, this.action, this.spamStrings);
        }
    },
    stopSpam: function (str) {
        this.spamStrings[this.spamStrings.indexOf(str)] = undefined;
        this.spamStrings = this.spamStrings.filter(function (elem) {
            if (elem) {
                return elem;
            }
        });
        if (this.spamStrings.length < 1) {
            clearInterval(this.interval);
            this.interval = undefined;
        }

    },
    intervalTime: 1000,
    interval: undefined,
    action: function (strings) {
        for (var i = 0; i < strings.length; i++) {
            console.log(strings[i]);
        }
    },
    spamStrings: []
};

// var spammer = {
//     startSpam: function (str) {
//         this.spamStrings.push(str);
//         if (!this.interval) {
//             this.interval = setInterval(function () {
//                 spammer.action();
//             }, this.intervalTime);
//         }
//     },
//     stopSpam: function (str) {
//         this.spamStrings[this.spamStrings.indexOf(str)] = undefined;
//         this.spamStrings = this.spamStrings.filter(function (elem) {
//             if (elem) {
//                 return elem;
//             }
//         });
//         if (this.spamStrings.length < 1) {
//             clearInterval(this.interval);
//         }
//
//     },
//     intervalTime: 1000,
//     interval: undefined,
//     action: function () {
//         for (var i = 0; i < this.spamStrings.length; i++) {
//             console.log(this.spamStrings[i]);
//         }
//     },
//     spamStrings: []
// };
// setInterval(function () {
//     spammer.action();
// }, spammer.interval);

//5
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function beautify(userText) {
    var smiles = [':)', ';)', '(:', ':p', ':D', ':-*'];
    var punctuation = ['.', ',', '?', '!', ';'];
    userText = userText.split(' ');
    for (var i = 0; i < userText.length; i++) {
        var tmpString = '';
        for (var j = 0; j < userText[i].length; j++) {
            if (Math.random() > 0.5) {
                tmpString += userText[i][j].toLowerCase();
            }
            else {
                tmpString += userText[i][j].toUpperCase();
            }
        }
        if (punctuation.indexOf(tmpString[(tmpString.length - 1)]) != -1) {
            tmpString = tmpString.substr(0, tmpString.length - 1) + smiles[getRandomInt(0, smiles.length - 1)] + tmpString[tmpString.length - 1];
        }
        else {
            tmpString += smiles[getRandomInt(0, smiles.length - 1)];
        }
        userText[i] = tmpString;
    }
    userText = userText.join(' ');
    return userText;
}

//6

var password = "YTFiMmMz";

function bruteForce(psswrd) {
    var variant = 0;
    while (true) {
        if (btoa(variant.toString(13)) == psswrd) {
            return variant.toString(13);
        }
        else if (variant.toString(13).length > 6) {
            return 'max password length exceeded';
        }
        variant++;
    }
}

console.log(bruteForce(password));



