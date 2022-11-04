// properties examples 

// 1..... what is key and how to use its?
//NB:>> 'key' keyword dara object key/properties sudhu nam gulo pawa jai.
const student = { name: 'Boka Jamai', age: 22, money: 5000, isRich: false, height: 17 };

const keys = Object.keys(student);
// console.log(keys);//op >>> [ 'name','age','money','isRich','height'] 'sud'     


// 2..... what is values and how to use its?
//NB:>> 'values' keyword dara object key/properties er sudhu value gulo pawa jai.
const student2 = { name: 'Boka Jamai', age: 22, money: 5000, isRich: false, height: 17 };

const values = Object.values(student);
// console.log(values);//op >>> [ 'Boka Jamai', 22, 5000, false, 17 ]    


// 3..... what is entries and how to use its?
//NB:>> 'entries' keyword dara object er key and value  joda pawa  jai.
const student3 = { name: 'Boka Jamai', age: 22, money: 5000, isRich: false, height: 17 };

const entries = Object.entries(student);
// console.log(entries);
/*
op >>> [
    [ 'name', 'Boka Jamai' ],
    [ 'age', 22 ],
    [ 'money', 5000 ],       
    [ 'isRich', false ],     
    [ 'height', 17 ]
  ]
*/




// 4..... what is delete and how to use its?
//NB:>> 'delete' keyword dara object er jeti select korbe seiti pura 'joda delete  hoa jai'.
const student4 = { name: 'Boka Jamai', age: 22, money: 5000, isRich: false, height: 17};

delete student4.name;
// console.log(student4);//op >>> {age: 22, money: 5000, isRich: false, height: 17 }



// 5..... what is seal and how to use its?
//NB:>> 'seal' keyword dara object er j kono propery value change kora jai but delete kora jaina.....amr kichu kom jori bujar etar'.
const student5 = { name: 'Boka Jamai', age: 22, money: 5000, isRich: false, height: 17};
Object.seal(student5);
delete student5.age == 10;
console.log(student5);//op >>>



// 6..... what is freeze and how to use its?
//NB:>> 'freeze' keyword dara object er j kono propery value change kora ba delete kora kichui jai na.....amr kichu kom jori bujar etar'.
const student6 = { name: 'Boka Jamai', age: 22, money: 5000, isRich: false, height: 17};
Object.freeze(student5);
delete student5.age;
console.log(student6);//op >>>
