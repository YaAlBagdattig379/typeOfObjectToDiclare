/*
what is method  in j
s ?
>>> jokhon object er vitor kono ekta propertir value/man function lekha  jai etai
method.
>>> jehetu eta function tai eta ke return  ,parameter, call kora, ebong ei object 
er j kno property access kora and change kora jai ei function er dara.    
*/ 
// egp: 1 
const student = {
    name: 'Hero Alam',      
    money:5000,
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
        console.log(this.name ,"boka jamami")
    },
    treatDay: function(expense,tips){
        this.money = this.money - expense - tips;
        return this.money;
        // console.log(this.money,'valo chalak jamai ')
    }
   
};
// student.takeExam()
// const remaining1 = student.treatDay(1000,100)
const remaining2 = student.treatDay(500,200)
// try{
    // console.log(remaining1);
    console.log(remaining2);''
// }catch(er){
//     console.log(er)
// }
// ;
