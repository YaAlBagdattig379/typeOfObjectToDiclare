//********** loop in Object ***************
/**
 ******** rule of loop which one is more advantage for specific purposes ********



 1..name:- 'regular for loop'>>> 
       for(const i = 0 ; i > 10 ; i++){}
       usage: >>> normally use kora hoi ei ti .


2..name:- 'for of' >>>>
         for(const number of students){}
         usage:> ei loop ti specially for array er upor use hoi.

3..name:- 'for in' >>>>
         for(const per in students){}
         usage:> ei loop ti specially for object er upor use hoi.
*/
const bottle = {
    name: 'water-bottle',
    price:  50,
    material: 'plustics',
    weight: '20grms'
};

// egp:...1
for(const pro in bottle){
    // console.log(pro) // normaly key name gulo eivabe pawa jai...
    /* op >>>  name 
               price
               material
               weight
    */
    console.log(pro , bottle[pro]);
    /* ei vabe key and value gulo mile jai..
    name water-bottle
    price 50
    material plustics
    weight 20grms
   */
//    console.log(bottle['price'])
   
}



// advanced by 'entries'  // ei vabe entries use hoi to get keys and value from Object
// egp:...2
for(const [key,value] of Object.entries(bottle)){
    // console.log(key,value);
    /**
      name water-bottle
      price 50
      material plustics
      weight 20grms
     */
}