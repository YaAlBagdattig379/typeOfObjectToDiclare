/**
 * *********************rules to compare with object****************
 * 
 * 
 * ***1...object k ar ekti object er sathe compare korar somoi upor upor        conmapre  korle same / true hobe na jodio tader value ekoi thakuk..
 * 
 ****2...tobe ha jodi stringify kore compare kore tahole true / same hobe..


 ****3...jodi ek objeact er value ar ekti object er sathe ankta dewa hooi tahole true hobe but tader property kom ba beshi korle true hobe na..
 *
 *
 */
//..1..for examples according to rules
const first = {a: 1};
const second = {a: 1};
if(first === second){
    console.log('object are equal !')
}
else{
    console.log('object are not same  !') //op >>> object are not same  !
}          //NB:> sob value  ek thakar sotteo false holo becoz etai rule



//..2..for examples according to rules
const first2 = {a: 1};
const second2 = {a: 1};
if(JSON.stringify(first) === JSON.stringify(second)){
    console.log('object are equal !') //op >>> object are same  !
                        
}      //NB:> becoz eta stringify kore  compare kora hoache.                        
else{
    console.log('object are not same  !')
}        


//..3..for examples according to rules
const first3 = {a: 1};
const second3 = {a: 1};
const third3 = second3;
if(JSON.stringify(first3) ===JSON.stringify(third3)){
    console.log('object are equal !') //op >>> object are same  !
                        
}      //NB:> becoz eta stringify kore  just tader variable name gula sudhu alada kora  hoache  compare kora hoache.                        
else{
    console.log('object are not same  !')
}        