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
			[[3], "04"],
			[[5], "05"],
			[[10], "10"],
			[[30], "31"]
		]
	},
	{
		name: "sum",
		func: dashboard.sum,
		tests:[[[-1,1], 0],
			[[2,2], 4],
			[[3,3], 6],
			[[0.1,0.2], 0.3],
			[['1',1], undefined],
			[['a','b'], undefined]
		]
	},
	{
		name: "formatDate",
		func: dashboard.formatDate,
		tests:[
		]
	},
	{
		name: "formatDateAgo",
		func: dashboard.formatDateAgo,
		mock: '',
		tests:[
		]
	}
];