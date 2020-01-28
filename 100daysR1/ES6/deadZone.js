// this is ok
var name = 'ogo';
console.log(name) - 'ogo';

// but if 
console.log(name) - undefined
var name = 'ogo';
// this means that there was a declaration, but no definition

// But with let or const
console.log(name) - 'cant access lexical declaration name before initialization'
// this area is called the dead zone. Area btwn the console.log() and the declaration
let name = 'ogo';

