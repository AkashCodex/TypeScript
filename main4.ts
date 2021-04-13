export{}

//clases and Access Specifiers

class Student{
  //let name:String; //shows error why? 
    name:String;

    constructor(name){
     this.name=name;
    }

    sayhello(){
      console.log(`Hello ${this.name}`);  
    }  
}


let obj1=new Student("Akash");
obj1.sayhello();

let obj2=new Student("Sanjay");
obj2.sayhello();



//Inheritance+Access specifiers+OOPS ocnepts all are same in TS just as in another languages

class Teacher extends Student{

}

let obj3=new Teacher("fsf");
obj3.sayhello();


