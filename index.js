var dirhash = require('dirhash'),
    glob = require('glob'),
    hbsPrecompiler = require('handlebars-precompiler'),
    oldHash;

module.exports = function (config) {
    var express = function (req, res, next){
		var newHash = dirhash(config.templatesPath);
		if (newHash !== oldHash) {
			oldHash = newHash;
			hbsPrecompiler.do(config);
		}
		next();
	};

    config.templates = glob.sync(config.templatesPath + '/**/*.handlebars');

    express.compile  = function(){
        hbsPrecompiler.do(config);
    };

    return express;
};

