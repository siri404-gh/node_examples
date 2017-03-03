var Emitter = require('./emitter');
var e = new Emitter();
e.on('greet', function() {
    console.log('greet');
});
e.on('bye', function() {
    console.log('bye');
});
e.emit('greet');
e.emit('greet');
e.emit('bwye');
e.emit('bye');