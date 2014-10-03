var dirhash = require('dirhash'),
    glob = require('glob'),
    hbsPrecompiler = require('handlebars-precompiler'),
    oldHash;

module.exports = function (config) {
    return function (req, res, next){
        var newHash = dirhash(config.templatesPath);

        config.templates = glob.sync(config.templatesPath + '/**/*.handlebars');

        if (newHash !== oldHash) {
            oldHash = newHash;
            hbsPrecompiler.do(config);
        }

        next();
    };
};

