function printNum(n) {
    setTimeout(function() {
        console.log(n);
    }, n * 1000);
}

for (var i = 0; i < 5; i++) {
	printNum(i);
}

// Original function would just print out the same number which isn't meant to be implemented like.