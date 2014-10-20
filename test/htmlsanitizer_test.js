/*global describe,it*/
'use strict';
var assert = require('assert'),
  htmlsanitizer = require('../htmlSanitizer.js');

describe('htmlsanitizer node module.', function() {
  it('must have Sanitize', function() {
    assert( htmlsanitizer.Sanitize(), 'Sanitize');
  });
});
