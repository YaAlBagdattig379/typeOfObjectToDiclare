/*
what is method  in js ?
>>> jokhon object er vitor kono ekta propertir value/man function lekha  jai etai
method.
>>> jehetu eta function tai eta ke return  ,parameter, call kora, ebong ei object 
er j kno property access kora and change kora jai ei function er dara.    
*/ 
// egp: 1 
const studdent = {
    name: 'Hero Alam',
    isRich: false,
    roll: 24,
    major: 'english',
    subjects:['bengali','mathematics','history','English'],
    bestFriend:{
        name : 'keltu',
        isRich: true,
        major: 'english',
        roll: 22,
        subjects:['geography','history','Phsical Science']
    },
    sport:'playCricket',
    takeExam: function(){
        console.log(this.name)
    }
};
console.log(studdent);
