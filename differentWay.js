// different way to diclare Object in JavaScript 

//method:- 1.....using object literal
const student = {name:'Here Alam',age: 20};
// console.log(student); //op>> { name: 'Here Alam', age: 20 }

//method:- 2.....using constructor
const person = new Object();
// console.log(person); // op >>>  {}

//method:- 3.....variable er jaigai 'inheretence/null'dite hobe faka rakle hobe na
// use by a.. 'null'
const humayan = Object.create(null);
// console.log(humayan); // op >> [Object: null prototype] {}  pls write something whether 'null' or any'object' inside the parrenthesis;
// use by b..'object'
const human = Object.create(student);
// console.log(human); // op >> {}   pls write something whether 'null' or any'object' inside the parrenthesis;


//method :- 4...creating object from class....eatake alternatively bola hoi 'syntactical suger'..

class people {
    constructor(name,roll){
        this.name = name;
        this.roll = roll;
    }
}
const peo = new people("manus",24);
// console.log(peo) //op >>> people { name: 'manus', roll: 24 }



// method:- 5.. object by function 
function manus(name,age){
    this.name = name;
    this.age = age;
    // console.log('hello bondhu amr !')
}
const man = new manus('Hero Alam','30+');
console.log(man);// op >>>  manus { name: 'Hero Alam', age: '30+' }