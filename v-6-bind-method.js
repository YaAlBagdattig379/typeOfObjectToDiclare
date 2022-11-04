/**
 *  ****************use 'bind' method*****************
 *  
 */
const rjKibira = {
    name: 'rajib jilani',      
    id : 101,      
    money:5000,
    isRich: false,
    roll: 30,
    treatDay: function(expense){
        this.money = this.money - expense;
        console.log(this,'hello ! this is part of kibriah') // normally this take console.log dekhale pura take dekhabe
        //
        return this.money;
    }   
}
const Hero = {
    name: 'Hero Alam',
    id : 102,      
    money:3000,
    isRich: false,
    roll: 28,
};
// rjKibira.treatDay(1000);
const heroAlam = rjKibira.treatDay.bind(Hero);
heroAlam(1500);
heroAlam(500);
heroAlam(200);
// console.log(heroAlam);