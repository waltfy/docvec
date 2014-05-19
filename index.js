// module.exports = require('./lib/docvec');
var docvec = require('./lib/docvec');

var myDocs = [
	'this document is about node.',
	'this document is about ruby.',
	'this document is about ruby and node.',
	'this document is about node. it has node examples'
];

docvec.run(myDocs, function (err, res) {
	console.log(res);
});