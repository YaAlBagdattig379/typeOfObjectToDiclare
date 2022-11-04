/**
 *  **************use of'bind', call, apply  ***************
 *  **************use of'bind', call, apply  ***************
 */
 const rjKibira = {
    name: 'rajib jilani',      
    id : 101,      
    money:5000,
    isRich: false,
    roll: 30,
    treatDay: function(expense,tips,gstF){
        this.money = this.money - expense - tips - gstF;
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
//...1..bind use case......
const heroAlamBind = rjKibira.treatDay.bind(Hero);
heroAlamBind(1500,100,20);
//...2..call.. use case......
rjKibira.treatDay.call(Hero,200,100,50);
//...3..call.. use case......
rjKibira.treatDay.apply(Hero,[500,200,100]);