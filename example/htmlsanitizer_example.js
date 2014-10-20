'use strict';

var htmlsanitizer = require('../htmlSanitizer.js');

htmlsanitizer.Sanitize('<span data-bind="visible: codePicto">&nbsp;</span>');
// => awesome