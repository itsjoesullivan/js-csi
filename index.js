/* utility for handling ANSI escape sequences */
var CSI = module.exports = function(args) {
	process.stdout.write('\u001B[' + args);
};

/** Move the cursor to given line, column
	
	CSI.move(1,4); 	//Move cursor to line 1, column 4
	CSI.move(10); 	//Move cursor to line 10

 */
CSI.move = function(line, col) {
	this(line + ';' + (col || 1) + 'f');
};


