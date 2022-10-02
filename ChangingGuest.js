var guests=['Sir Zia','Sir Daniyal','Ms. Hira']
var message='! You\'re invited to my house for a little feast'
console.log(guests[0] + message)
console.log(guests[1] + message)
console.log(guests[2] + message)
console.log("\nSorry, " + guests[1] + " can't make it to dinner.")
guests[1]='Sir Atif'
console.log("\n" + guests[0] + message)
console.log(guests[1] + message)
console.log(guests[2] + message)