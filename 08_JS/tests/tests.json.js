var testPack = [
    {
        name: "lieRound",
        func: dashboard.lieRound,
        mock: 'Math.round = function(a) { return a+1};',
        tests: [
            [[1], 2],
            [[3.6], 4.6],
            [[5.99], 6.99]
        ]
    },
    {
        name: "leadZero",
        func: dashboard.leadZero,
        tests: [
            [[1], "01"],
            [[3], "03"],
            [[5], "05"],
            [[10], "10"],
            [[30], "30"]
        ]
    },
    {
        name: "sum",
        func: dashboard.sum,
        tests: [
            [[-1, 1], 0],
            [[2, 2], 4],
            [[3, 3], 6],
            [[0.1, 0.2], 0.3],
            [[0.01, 0.02], 0.03],
            [[0.001, 0.002], 0.003],
            [['1', 1], undefined],
            [['a', 'b'], undefined]
        ]
    },
    {
        name: "formatDate",
        func: dashboard.formatDate,
        tests: [
            [[1385381104000], '14:05 at 25-11-2013'],
            [[1347023861000], '16:17 at 07-09-2012'],
            [[1307354948000], '13:09 at 06-06-2011'],
            [[1396624612000], '18:16 at 04-04-2014'],
            [[1456922409000], '14:40 at 02-03-2016'],
            [[{}], 'Error: wrong timestamp'],
            [[[]], 'Error: wrong timestamp'],
            [['1307354948000'], '13:09 at 06-06-2011'],
            [['abcd'], 'Error: wrong timestamp']
        ]
    },
    {
        name: "formatDateAgo",
        func: dashboard.formatDateAgo,
        mock: 'Date.prototype.valueOf = function () { return Date.now() }; Date.getTime = function () {return Date.now();};',
        tests: [
            [[{}], 'Error: wrong timestamp'],
            [[[]], 'Error: wrong timestamp'],
            [['222abcd'], 'Error: wrong timestamp'],
            [[(17 * 24 * 3600 * 1050)], "3 weeks ago"],
            [[(2 * 24 * 3600 * 1050)], "2 days ago"],
            [[(3 * 3600 * 1050)], "3 hours ago"],
            [[(600 * 1000)], "10 minutes ago"],
            [[(18000)], "18 seconds ago"]
        ]
    }
];