console.log('Running Axe for Gies eLearning...');
axe.run(function (err, results) {
	if (err) throw err;
	console.log('Number of violations: ', results.violations.length);
	results.violations.forEach(function(violation) {
		console.log('Violation ID:', violation.id, '\nNumber of nodes affected:', violation.nodes.length, '\nHelp:', violation.help);
		violation.nodes.forEach(function(node){
			console.log('Node affected by', violation.id, 'violation:');
			console.log(document.querySelector(node.target));
		});
		console.log('More information:', violation);
	});
});
