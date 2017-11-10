//Task 1
var Tank = function (volume, inSpeed) {

    var volume = volume;
    var currentVolume = 0;
    var inSpeed = inSpeed;

    var valves = {
        inIsOpen: false,
        outIsOpen1: false,
        outIsOpen2: false
    };

    var speeds = {
        inSpeed: 0,
        outSpeed1: 0,
        outSpeed2: 0
    };

    var intervalTime = 3000;

    this.openInValve = function () {
        valves['inIsOpen'] = true;
        speeds['inSpeed'] = inSpeed;
    };

    this.closeInValve = function () {
        valves['inIsOpen'] = false;
        speeds['inSpeed'] = 0;
    };

    this.openFirstOutValve = function (speed) {
        if (speed) {
            if (valves['outIsOpen1']) {
                return false;
            }
            valves['outIsOpen1'] = true;
            speeds['outSpeed1'] = speed;
        }
    };

    this.openSecondOutValve = function (speed) {
        if (speed) {
            if (valves['outIsOpen2']) {
                return false;
            }
            valves['outIsOpen2'] = true;
            speeds['outSpeed2'] = speed;
        }
    };

    this.closeFirstOutValve = function () {
        valves['outIsOpen1'] = false;
        speeds['outSpeed1'] = 0;
    };

    this.closeSecondOutValve = function () {
        valves['outIsOpen2'] = false;
        speeds['outSpeed2'] = 0;
    };

    var calcCurrentVolume = function () {
        var volumePerSec = speeds['inSpeed'] - speeds['outSpeed1'] - speeds['outSpeed2'];
        if (volumePerSec > 0) {
            currentVolume = Math.min(volume, currentVolume + volumePerSec);
        }
        else {
            currentVolume = Math.max(0, currentVolume + volumePerSec);
        }
    };

    var buildLogString = function () {
        var logString = '';
        for (var k in valves) {
            logString += (valves[k] ? '@' : '.') + ' ';
        }
        var fillPercent = (currentVolume / volume) * 100;
        fillPercent = fillPercent.toFixed(2) + ' %';
        return logString + fillPercent;
    };

    var stateLogger = function () {
        console.clear();
        calcCurrentVolume();
        console.log(buildLogString());
    };

    var interval = setInterval(function (logger) {
        logger();
    }, intervalTime, stateLogger);
};

//Task 2
var Runner = function () {
    var medals = {};

    this.getSetMedals = function (type, count) {
        if (arguments.length == 1) {
            return medals[type];
        }
        else {
            if (medals[type]) {
                medals[type] += count;
            }
            else {
                medals[type] = count;
            }
        }
    }
};

//Task 3

var tmpBook = function () {
    var isbn = '0000-0000-0000-0000';
    var name = 'The Little Book Of CALM';
    var autors = ['Some Name'];
    var lang = 'en';
    var pageCount = 350;
    this.price = 10;
    this.coverType = 'hard';
};

var tmpMagazine = function () {
    var name = 'Metropolitan Magazine';
    var lang = 'en';
    var pageCount = 50;
    this.price = 5;
    this.periodical = true;
};

var BookShopGoods = function (name, lang, pageCount, price) {
    var name = name;
    var lang = lang;
    var pageCount = pageCount;
    this.price = price;
};

var Book = function (name, lang, pageCount, price, isbn, authors, coverType) {
    BookShopGoods.apply(this, arguments);
    var isbn = isbn;
    var authors = authors;
    var coverType = coverType;
};

var Magazine = function (name, lang, pageCount, price, periodical) {
    BookShopGoods.apply(this, arguments);
    var periodical = periodical;
};

