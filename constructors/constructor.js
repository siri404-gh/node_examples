var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Person.prototype.greet = function() {
    console.log('Hello '+ this.firstName+' '+ this.lastName);
}

var a = new Person('John','Doe');

console.log(a);
console.log(typeof a);
console.log(a.__proto__);

// var b = new Object();
//
// console.log(b);
// console.log(typeof b);
// console.log(b.__proto__);
