export{}
//Array types:-single typed+mixed typed

//single typed arrays
let list:number[]=[1,2,3,4,5];
let list1:string[]=["ghds","du","huduid","isdhgugf"];

//mixed typed arrays
let list3:[string,number]=["shd",90];  //can only defined 1 string and 1 number value only

//enum type

enum xtype{p,q,r};

let a:xtype.p;
console.log(a);



//  unknown type+type conversion

let h:unknown=10;

//method suggestion not gonna work for that you need to convert h.()

(h as string).toUpperCase();  //now it's works fine


 