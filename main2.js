"use strict";
exports.__esModule = true;
//multitype
var multitype;
multitype = "sjk";
multitype = 90;
multitype.toFixed();
console.log(multitype);
//functions in TS
//using types in functions
//here n1 must be a number+n2 must be a number+return type also be a number
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(2, 3)); //works fine
//console.log(add(4,"shj"));  gives error as type is specified
function add1(n1, n2) {
    return n1 + n2;
}
// here ? means optional parameters
add1(5); //it will return 5
