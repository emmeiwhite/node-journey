// Modules

const names = require('./3-variables');
const sayHi = require('./4-functions');
const data = require('./6. alternate-way');

sayHi("Emmei");
sayHi(names.PETER);
sayHi(names.JOHN);

// alternate way to export- example
console.log(data);


// Mind-Boggling way to call this kind of file

require('./7-mind-boggling-way');
