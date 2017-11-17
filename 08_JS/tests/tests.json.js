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
            [[{}], '02:00 at 01-01-1970'],
            [[[]], '02:00 at 01-01-1970'],
            [['1307354948000'], '13:09 at 06-06-2011'],
            [['abcd'], '02:00 at 01-01-1970']
        ]
    },
    {
        name: "formatDateAgo",
        func: dashboard.formatDateAgo,
        mock: 'Math.round = function(a) { return a.toFixed(0)};',
        tests: [
            [[{}], 'Error: wrong timestamp'],
            [[[]], 'Error: wrong timestamp'],
            [['1307354948000'], '337 weeks ago'],
            [['222abcd'], 'Error: wrong timestamp'],
            [[(new Date()) - (17 * 24 * 3600 * 1050)], "3 weeks ago"],
            [[(new Date()) - (2 * 24 * 3600 * 1050)], "2 days ago"],
            [[(new Date()) - (3 * 3600 * 1050)], "3 hours ago"],
            [[(new Date()) - (600 * 1000)], "10 minutes ago"],
            [[(new Date()) - (18000)], "18 seconds ago"]
        ]
    }
];