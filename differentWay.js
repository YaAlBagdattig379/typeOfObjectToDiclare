// different way to diclare Object in JavaScript 

//method:- 1.....using object literal
const student = {name:'Here Alam',age: 20};
//cosnt student = {name:'hero alam', age : 20}
// console.log(student); //op>> { name: 'Here Alam', age: 20 }

//method:- 2.....using constructor
const person = new Object();
// const  peron = new Object();
// console.log(person); // op >>>  {}

//method:- 3.....variable er jaigai 'inheretence/null'dite hobe faka rakle hobe na
// use by a.. 'null'
const humayan = Object.create(null);
// const human =  Object.create(null/'kono na kono object nam')
// console.log(humayan); // op >> [Object: null prototype] {}  pls write something whether 'null' or any'object' inside the parrenthesis;
// use by b..'object'
const human = Object.create(student);
// const humayan = Object.create(student);/// studdent is a object name 
// console.log(human); // op >> {}   pls write something whether 'null' or any'object' inside the parrenthesis;


//method :- 4...creating object from class....eatake alternatively bola hoi 'syntactical suger'..
// exp: 1
class people {
    constructor(name,roll){
        this.name = name;
        this.roll = roll;
    }
}
const peo = new people("manus",24);
// console.log(peo) //op >>> people { name: 'manus', roll: 24 }
// exp: 2 
class club{
    constructor(name,playerRate){
        this.name = name;
        this.playerRate = playerRate;
    }
}
const clubName = new club("babor Azam",34000)
// console.log(clubName);// club { name: 'babor Azam', playerRate: 34000 }





// method:- 5.. object by function 
// exap: 1
function manus(name,age){
    this.name = name;
    this.age = age;
    // console.log('hello bondhu amr !')
}
const man = new manus('Hero Alam','30+');
// console.log(man);// op >>>  manus { name: 'Hero Alam', age: '30+' }
// exap: 2
function wlc(greeting,nam){
    this.greeting = greeting;
    this.nam = nam;
    // console.log('hello good morning')
}
const message = new wlc('good morning','Hero Alam');
console.log(message); // op >>> wlc { greeting: 'good morning', nam: 'Hero Alam' }
