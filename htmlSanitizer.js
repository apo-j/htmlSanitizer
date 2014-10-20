/*
 *
 * https://github.com/apo-j/htmlsanitizer
 *
 * Copyright (c) 2014 apo-j
 * Licensed under the MIT license.
 *
 * Problems:
 * generate global require variable http://stackoverflow.com/questions/15456426/global-require-with-browserify-v2
 */

'use strict';

var sanitizer = require('./lib/sanitizer');

var sanitize = function(html){
    var $ = sanitizer.Sanitize(html);

    return $.html();
}


exports.Sanitize = sanitize;

