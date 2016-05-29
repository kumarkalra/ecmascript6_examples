var longFn = function() {
	return new Promise(function(res, rej) {
		setTimeout(res, 1000);
	});
};

var coolFn = function() {
	console.log('cool');
};

// logs cool after 1 second
longFn().then(coolFn);
