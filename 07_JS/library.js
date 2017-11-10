Array.prototype.even = function (f) {
    for (var i = 0; i < this.length; i++) {
        if (i % 2 == 0) {
            this[i] = f(this[i]);
        }
    }
};
Array.prototype.odd = function (f) {
    for (var i = 0; i < this.length; i++) {
        if (i % 2 != 0) {
            this[i] = f(this[i]);
        }
    }
};
Array.prototype.shuffle = function () {
    this.sort(function (a, b) {
        return Math.random() - 0.5;
    })
};
String.prototype.intrim = function () {
    // noinspection JSAnnotator
    var arr = this.split(' ');
    arr = arr.filter(function (elem) {
        if (elem) {
            return elem;
        }
    });
    return arr.join(' ');
};
String.prototype.reverse = function () {
    var halfLength = Math.floor(this.length/2);
};

String.prototype.isPalindrome = function(){
    return (this.toString() == this.toString().reverse());
};