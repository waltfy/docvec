// module dependencies
var each = require('async-each');
var wf = require('word-freq');
var df = require('doc-freq');

var dictionary = {}; // stores the document-frequency
var vectors = {}; // 

/**
	* Returns the inverse document-frequency. `Number`.
	*
	* word - `String`. Word in a document.
	* corpusSize - `Number`. Number of documents that compose the corpus.
	**/
var idf = function (word, corpusSize) {
  return Math.log(corpusSize / dictionary[word]);
};

var computeVectors = function (corpus) {
	corpus.forEach(function (doc, i) {
		var tf = wf.freq(doc); /* term frequency */
		for (var w in tf) {
			var tfidf = tf[w] * idf(w, corpus.length);
			console.log('word:', w, 'tf-idf:', tfidf);
		}
	});
};

module.exports = {
	run: function (corpus, callback) {
		// if (typeof corpus === 'undefined' || corpus.constructor !== Array) return callback(new Error('You must provide an `Array` of documents'));
		
		dictionary = df.run(corpus); // computes the document frequency
		computeVectors(corpus);

		return callback(null, {});
	}
};