//no..1 'the' are used by regular method.
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

//no..2 'the' are used by  arrow function.....rules are written in note Khata.
const raju = {
    name: 'rajib jilani',      
    id : 101,      
    money:5000,
    isRich: false,
    roll: 30,
    // treatDay: function(expense,tips,gstF){
    //     this.money = this.money - expense - tips - gstF;
    //     console.log(this,'hello ! this is part of kibriah') 
    //     return this.money;
    // }   
    treatDay: function(expense,tips,gstF){
        this.money = this.money - expense - tips - gstF;
        console.log(this,'hello ! this is part of kibriah') 
        return this.money;
    }   
}
const manager = {
    name: 'Hero Alam',
    id : 102,      
    money:3000,
    isRich: false,
    roll: 28,
};