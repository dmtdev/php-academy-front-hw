Array.prototype.even = function (f) {
    var arr = this;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr[i] = f(arr[i]);
        }
    }
    return arr;
};
Array.prototype.odd = function (f) {
    var arr = this;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i] = f(arr[i]);
        }
    }
    return arr;
};
Array.prototype.shuffle = function () {
    this.sort(function (a, b) {
        return Math.random() - 0.5;
    })
};
String.prototype.intrim = function () {
    var arr = this.split(' ');
    arr = arr.filter(function (elem) {
        if (elem) {
            return elem;
        }
    });
    return arr.join(' ');
};
String.prototype.reverse = function () {
    var result = '';
    for (var i = this.length - 1; i > -1; i--) {
        result += this[i];
    }
    return result;
};

String.prototype.isPalindrome = function () {
    return (this == this.reverse());
};