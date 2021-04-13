"use strict";
exports.__esModule = true;
//Array types:-single typed+mixed typed
//single typed arrays
var list = [1, 2, 3, 4, 5];
var list1 = ["ghds", "du", "huduid", "isdhgugf"];
//mixed typed arrays
var list3 = ["shd", 90]; //can only defined 1 string and 1 number value only
//enum type
var xtype;
(function (xtype) {
    xtype[xtype["p"] = 0] = "p";
    xtype[xtype["q"] = 1] = "q";
    xtype[xtype["r"] = 2] = "r";
})(xtype || (xtype = {}));
;
var a;
console.log(a);
//  unknown type+type conversion
var h = 10;
//method suggestion not gonna work for that you need to convert h.()
h.toUpperCase(); //now it's works fine
