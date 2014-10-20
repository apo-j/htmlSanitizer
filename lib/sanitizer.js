/**
 * Created by xyj on 17/10/2014.
 */

var cheerio = require("cheerio");
var sanitizer = require('sanitizer');

//copy from front
//var NavigationType = {
//    outer: "£outer",
//    inner: "£inner",
//    jump: "£jump",
//    content: "£content"
//};


var uriRewriter = function(uri){
    if(uri){
        var strUri = uri.toString();
        if(strUri.indexOf('javascript') >= 0){
            return null;
        }

        if(/^http|^https|^mailto/i.test(strUri)){//no external site is allowed
            return null;
        }

        //uri = NavigationType.inner + uri;
        return uri;

    }

    return null;
}


var sanitize = function(html){
    html = sanitizer.sanitize(html, uriRewriter);//sanitize
    $ = cheerio.load(html);
    //remove all script, object, iframe, frame
    $('script, object, iframe, frame').remove();

//    $('*').each(function(){
//        var self = this;
//        for(var attr in self.attribs){
//            if(self.attribs[attr].toLowerCase().indexOf('javascript') >= 0){//for <IMG SRC="javascript:alert('XSS');"> like attack
//                $(self).removeAttr(attr);
//                continue;
//            }
//            if(self.attribs.hasOwnProperty(attr)){
//                if(events.Check(attr)){
//                    $(self).removeAttr(attr);
//                    continue;
//                }
//            }
//        }
//
//    });
    return $;
}

exports.Sanitize = sanitize;