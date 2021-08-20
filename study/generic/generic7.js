"use strict";
//keyof 
var person = {
    name: 'ugo',
    age: 500
};
function getProp1(obj, key) {
    return obj[key];
}
function getProp2(obj, key) {
    return obj[key];
}
var b = person["name"];
console.log(b);
var a = getProp2(person, "age");
console.log(a);
// function setProp1(obj:IPerson,key:Keys,value:string|number) {
//     obj[key] = value;
// }
// function setProp2(obj:IPerson,key:Keys,value:string|number) {
//     obj[key] = value;
// }
