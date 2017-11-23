//Task 1
var Tank = function (volume, inSpeed) {

    var volume = volume;
    var currentVolume = 0;
    var inSpeed = inSpeed;
    var interval;
    var intervalTime = 3000;

    var speeds = {
        inSpeed: 0,
        outSpeed1: 0,
        outSpeed2: 0
    };

    this.openInValve = function () {
        if (!interval) {
            startInterval();
        }
        speeds.inSpeed = inSpeed;
    };

    this.closeInValve = function () {
        speeds.inSpeed = 0;
    };

    this.openFirstOutValve = function (speed) {
        if (speed) {
            speeds.outSpeed1 = -speed;
        }
    };

    this.openSecondOutValve = function (speed) {
        if (speed) {
            speeds.outSpeed2 = -speed;
        }
    };

    this.closeFirstOutValve = function () {
        speeds.outSpeed1 = 0;
    };

    this.closeSecondOutValve = function () {
        speeds.outSpeed2 = 0;
    };

    var calcCurrentVolume = function () {
        var volumePerSec = 0;
        for (var k in speeds) {
            volumePerSec += speeds[k];
        }
        if (volumePerSec > 0) {
            currentVolume = Math.min(volume, currentVolume + volumePerSec);
        }
        else {
            currentVolume = Math.max(0, currentVolume + volumePerSec);
        }
    };

    var buildLogString = function () {
        var logString = '';
        for (var k in speeds) {
            logString += (speeds[k] != 0 ? '@' : '.') + ' ';
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

    var startInterval = function () {
        interval = setInterval(function (logger) {
            logger();
        }, intervalTime, stateLogger);
    }
};

//Task 1.1
var Tank2 = function (volume, speed) {

    var volume = volume;
    var currentVolume = 0;
    var inSpeed = speed;
    var interval;
    var intervalTime = 3000;
    var SPEED_PREFIX = 'outSpeed';

    var speeds = {
        inSpeed: 0,
        outSpeed1: 0,
        outSpeed2: 0,
        outSpeed3: 0
    };

    /**
     * @param action open|close
     */
    this.openCloseInValve = function (action) {
        if (!interval) {
            startInterval();
        }
        switch (action) {
            case  'open':
                speeds.inSpeed = inSpeed;
                break;
            case  'close':
                speeds.inSpeed = 0;
                break;
            default:
                console.warn('Wrong action for openCloseInValve, open|close needed.');
        }
    };
    /**
     * @param valveNum
     * @param action open|close
     * @param speed
     */
    this.openCloseOutValve = function (valveNum, action, speed) {
        speed = (+(speed) ? valveNum : 0);
        var speedKey = SPEED_PREFIX + valveNum;

        switch (action) {
            case  'open':
                speeds[speedKey] = -speed;
                break;
            case  'close':
                speeds[speedKey] = 0;
                break;
            default:
                console.warn('Wrong action for openCloseOutValve, open|close needed.');
        }
    };

    var calcCurrentVolume = function () {
        var volumePerSec = 0;
        for (var k in speeds) {
            volumePerSec += speeds[k];
        }
        if (volumePerSec > 0) {
            currentVolume = Math.min(volume, currentVolume + volumePerSec);
        }
        else {
            currentVolume = Math.max(0, currentVolume + volumePerSec);
        }
    };

    var buildLogString = function () {
        var logString = '';
        for (var k in speeds) {
            logString += (speeds[k] != 0 ? '@' : '.') + ' ';
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

    var startInterval = function () {
        interval = setInterval(function (logger) {
            logger();
        }, intervalTime, stateLogger);
    }
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


