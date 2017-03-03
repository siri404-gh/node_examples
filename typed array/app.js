var buf = new ArrayBuffer(8);
var myArray = new Int8Array(buf);

myArray[0] = 10;
myArray[1] = 20;
myArray[2] = 30;

console.log(myArray);
