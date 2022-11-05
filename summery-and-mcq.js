const bottle = {
    name:'water-bottle',
    price: 40,
    material: 'plastic',
    depth: '1ltr'
}
// console.log(bottle);
Object.seal(bottle); // r delete hobe na because seal kora hoache..
delete bottle.price;
// console.log(bottle);
// console.log(Object.entries(bottle));
const obj ={ 
    a:1,
    b:7,
    c:3,
    length:2
};

// console.log(Object.keys(obj).length);
// console.log(Object.keys(obj).length);


const obj1= {module: 35, video:2}; 
const obj2= {module: 35, video:2};
if(obj1 === obj2){
    // console.log('its true !')
}
else{
    // console.log('its false !')
};





const getGirlFriend= (name = "chokina")=>"name"; 
console.log(getGirlFriend()); 
console.log(getGirlFriend);