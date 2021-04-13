export{}

//Interface

//Here instead of passing individual properties of an object like this

/*
function fullname(person:{firstname,lastname}){
 console.log(`${person.firstname} ${person.lastname}`);
}*/



/*
let p={
   firstname:"Bruce",
   lastname:"Wayne"
}*/


//But what if an object having more than 10 parameters and many functions are using same object in that case
//such kinda things makes code bulky and difficult to maintain
//in such case we use interfaces to make code clean and nice like this





interface Person{
 fistname:String,
 lastname?:String
}

function fullname(p:{firstname,lastname}){
 console.log(`${p.firstname} ${p.lastname}`);
}

let p={
    firstname:"Bruce",
    lastname:"Wayne"
 }
