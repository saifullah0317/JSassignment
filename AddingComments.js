/* My name is SaifUllah
10/2/2022
This is favouriteNumber.js program */
var favNum=12
console.log(favNum+' is my favourite number.')
// This is nameCases.js program
var name='Mr. eric'
console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(name.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}))