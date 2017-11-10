var Tank = function (volume, inSpeed) {
    this._volume = volume;
    this._currentVolume = 0;
    this._inSpeed = inSpeed;

    this._valves = {
        inIsOpen: false,
        outIsOpen1: false,
        outIsOpen2: false
    };

    this._speeds = {
        inSpeed: inSpeed,
        outSpeed1: 0,
        outSpeed2: 0
    };

    this._logInterval;
    this._intervalTime = 1000;

    var stateLogger = function () {

    };

    this.openCloseInValve = function () {
        if (this._valves['inIsOpen']) {
            this._valves['inIsOpen'] = false;
        }
        else {
            this._valves['inIsOpen'] = true;
        }
    };

    this.openCloseOutValve = function (valve, speed) {
        if (speed) {
            if (this._valves['outIsOpen' + valve]) {
                return false;
            }
            else {
                this._valves['outIsOpen' + valve] = true;
                this._speeds['outSpeed' + valve] = speed;
            }
        }
        else {
            this._valves['outIsOpen' + valve] = false;
        }
    };
};

var Tank = new Tank(100,2);

var Runner = function (){
    
};