
const singer = {
    name: 'Hero Alam',      
    money:5000,
    isRich: false,
    roll: 24,
    treatDay: function(expense){
        this.money = this.money - expense;
        return this.money;
    }   
};
const clown = {
    name: 'mojibor bd',      
    money:6000,
    isRich: true,
    age: 20,
    partyDay: function(taka){
        this.money = this.money - taka;
        return this.money;
    }   
};
// for no...1 Object 
const heroAlam = singer.treatDay(500)
const heroAlam2 = singer.treatDay(600)
// console.log(heroAlam);
// console.log(heroAlam2);

// for no..2 Object 
const mojiborBd = clown.partyDay(500)
const mojiborBd2 = clown.partyDay(500)
console.log(mojiborBd);
console.log(mojiborBd2);


