var dashboard = {};

dashboard.init = function () {
    // fix dates
    var dates = document.querySelectorAll('.date');
    for (var i = 0; i < dates.length; i++) {
        var timestamp = dates[i].innerText;
        dates[i].setAttribute('title', dashboard.formatDate(timestamp));
        dates[i].innerText = dashboard.formatDateAgo(timestamp);
    }
    // add date additional info
    /*var times = document.querySelectorAll('.time');
    for(var j = 0; j < times.length; j++) {
        var result = times[j].innerText;
        times[j].innerText = '>' + result;
    } */
    //
};
dashboard.leadZero = function (num) {
    return num > 9 ? "" + num : "0" + num;
};
dashboard.sum = function (a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return undefined;
    }
    var result = a + b;

    if ((result * 10) % 10 != 0) {
        result = +(result.toFixed(1));
    }
    return result;
};
dashboard.lieRound = function (a) {
    return Math.round(a);
};
dashboard.formatDate = function (timestamp) {
    timestamp = +timestamp;
    if(typeof timestamp != 'number' || isNaN(timestamp)){
        timestamp = 0;
    }
    var d = new Date(+timestamp);
    return dashboard.leadZero(d.getHours()) + ':' + dashboard.leadZero(d.getMinutes()) + ' at ' + dashboard.leadZero(d.getDate()) + '-' + dashboard.leadZero(d.getMonth() + 1) + '-' + d.getFullYear();
};
dashboard.formatDateAgo = function (timestamp) {
    timestamp = +timestamp;
    if(typeof timestamp != 'number' || isNaN(timestamp) || timestamp == 0 ){
        return 'Error: wrong timestamp';
    }
    var result = '';
    var currentDate = +(new Date());
    var delta = (currentDate - timestamp) / 1000;
    var timelines = {
        weeks: 7 * 24 * 60 * 60,
        days: 24 * 60 * 60,
        hours: 60 * 60,
        minutes: 60,
        seconds: 1 //fix: if 0 - timePassed == Infinity
    };
    var foundTimeline;
    for (var i in timelines) {
        if (delta > timelines[i]) {
            foundTimeline = i;
            break;
        }
    }
    var timePassed = Math.round(delta / timelines[foundTimeline]);
    result = timePassed + ' ' + foundTimeline + ' ago';

    return result;
};