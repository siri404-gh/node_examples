var a  = new Buffer('sreeram','binary');
console.log(a);
console.log(a.toString());
console.log(a.toJSON());

a.write('hi');
console.log(a);
console.log(a.toString());
console.log(a.toJSON());
