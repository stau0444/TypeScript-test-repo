"use strict";
function hello2(person) {
    console.log("" + person.name);
}
hello2({ name: 'ugo', age: 45, male: "man" });
hello2({ name: 'ugo', age: 45 });
hello2({ name: 'ugo' });
