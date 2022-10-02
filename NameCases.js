var name='Mr. eric'
console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(name.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}))