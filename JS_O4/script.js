"use strict";
//1
var user = {};
var newFirstName = "boris";
var newFirstName2 = "basil";

function setNewName(changeFirthName) {
    var capitalizedName = changeFirthName[0].toUpperCase() +
        changeFirthName.substr(1);
    var prettyFieldName = "-=" + capitalizedName + "=-";
    this.name = prettyFieldName;
}

user.setNewName = setNewName;
user.setNewName(newFirstName);
console.log(user.name);
user.setNewName(newFirstName2);
console.log(user.name);

//2
var obj = {};
var Clone = function () {
    return obj;
};
var clone1 = new Clone;
var clone2 = new Clone;
console.log(clone1 == clone2); // true

//3
var Spammer = function (interval) {
    this.interval = interval;
    this.startSpam = function (spamString) {
        setInterval(function (string) {
            console.log(string);
        }, this.interval, spamString)
    }
};

//4

var Pet = function (petType, petName, petBirthYear) {
    Object.defineProperty(this, "type",
        {
            value: petType,
            configurable: true,
            writable: false,
            enumerable: true
        }
    );
    Object.defineProperty(this, "name",
        {
            value: petName,
            configurable: true,
            writable: true,
            enumerable: true
        }
    );
    Object.defineProperty(this, "birthYear",
        {
            value: petBirthYear,
            configurable: true,
            writable: false,
            enumerable: false
        }
    );
    Object.defineProperty(this, "info", {
        get: function () {
            var currentYear = new Date().getFullYear();
            var age = currentYear - this.birthYear;
            return this.type + " " + this.name + ": " + age + " years";
        }
    });
};

//5
var Years = function (year) {
    this.year = year;
    this.toString = function () {
        var isLeapYear = (new Date(this.year, 1, 29).getMonth() == 1 ? "" : "not ");
        return this.year + " - " + isLeapYear + "leap-year";
    };
    this.valueOf = function () {
        return this.year;
    };
};

//5.1
var Years = function (year) {
    this.year = year;
    this.isLeapYear = function () {
        if ((!(this.year % 4) && (this.year % 100)) || (!(year % 400))) {
            return true;
        }
        return false;
    };
    this.toString = function () {
        var isLeapYear = (this.isLeapYear(this.year) ? "" : "not ");
        return this.year + " - " + isLeapYear + "leap-year";
    };
    this.valueOf = function () {
        return this.year;
    };
};

