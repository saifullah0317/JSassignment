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
console.log('I\'ve found a bigger table!')
guests.unshift('Sir Zeeshan')
guests.push('Sir Ali')
guests.splice(2,0,'Sir Ahmed')
console.log(guests[0] + message)
console.log(guests[1] + message)
console.log(guests[2] + message)
console.log(guests[3] + message)
console.log(guests[4] + message)
console.log(guests[5] + message)
console.log('Sorry! I can invite only two people for dinner.')
var name=guests[guests.length-1]
guests.pop()
console.log(name+'! Sorry I can\'t invite you to the dinner')
var name=guests[guests.length-1]
guests.pop()
console.log(name+'! Sorry I can\'t invite you to the dinner')
name=guests[guests.length-1]
guests.pop()
console.log(name+'! Sorry I can\'t invite you to the dinner')
name=guests[guests.length-1]
guests.pop()
console.log(name+'! Sorry I can\'t invite you to the dinner')
name=guests[0]
console.log(name+'! You are still invited to the dinner')
name=guests[1]
console.log(name+'! You are still invited to the dinner')
guests.pop()
guests.pop()
console.log(guests)