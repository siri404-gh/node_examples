var fs = require('fs');
require('colors');
console.log('================================='.red);

var path1  = 'foo.txt';
fs.exists(path1, function(exists) {
  if(!exists) {
    console.error('Something wrong!'.red);
  } else {
    console.log(path1 + ' exists: ' + exists.green);
  }
  console.log('================================='.red);
});

fs.stat(path1, function(err, stats) {
  if(err) {
    console.log('stat error: '+ err.message);
  } else {
    console.log(stats);
  }
  console.log('================================='.red);
});

var path2 = __dirname + '/foo.txt';
fs.readFile(path2, 'utf8', function(error, data) {
  if(error) {
    console.error('Read error '+ error.message.red);
  } else {
    console.log('Read Success! '.green  +data.yellow);
  }
  console.log('================================='.red);
});


var path3 = ('./write-foo.txt');
var data = 'all indians are my brothers and sisters';
// fs.writeFile(path, data, function(error) {
fs.writeFile(path3, data, function(error) {
  if(error) {
    console.error('write error:'+ error.message);
  } else {
    console.log('Write success! '.green+path3.yellow);
  }
  console.log('================================='.red);
});


var oldPath = 'write-foo.txt';
var newPath = 'write_foo_2.txt';
fs.rename(oldPath, newPath, function(error) {
  if(error) {
    console.error('rename error: '+error.message);
  } else {
    console.log('Successfully renamed '+ oldPath +' to '+ newPath);

    var path4 = './write_foo_2.txt';
    fs.unlink(path4, function(error) {
      if(error) {
        console.error('Unlink error: '+ error.message.red);
      } else {
        console.log('File deleted'.green);
      }
      console.log('================================='.red);
    });


  }
  console.log('================================='.red);
});



var path5 = 'foo';
fs.mkdir(path5, function(error) {
  if (error) {
    console.error('mkdir error' + error.message);
  } else {
    path5 += '/bar';
    fs.mkdir(path5, function(error) {
      if(error) {
        console.error('mkdir error: '+ error.message.red);
      } else {
          console.log('Successfully created: '+ path5.green);
      }
    });
  }
  console.log('================================='.red);
});
