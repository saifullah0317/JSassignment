var users=['Eric','Admin','Ahmed','Ali','Hamza']
for(var i=0;i<users.length;i++)
{
    if(users[i].toLowerCase()=='admin')
    {
        console.log('Hello admin, would you like to see a status report?')
    }
    else
    {
        console.log('Hello '+users[i]+', thank you for logging in again.')
    }
}