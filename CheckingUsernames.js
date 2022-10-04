var current_users=['Eric','John','Ahmed','Ali','Hamza']
var new_users=['Admin','JOHN','Zeeshan','Daniyal','ali']
var flag=false
for(var i=0;i<new_users.length;i++)
{
    flag=false
    for(var a=0;a<current_users.length;a++)
    {
        if(new_users[i].toLowerCase()==current_users[a].toLowerCase())
        {
            console.log(new_users[i]+' will need to enter a new username!')
            flag=true
        }
    }
    if(!flag)
    {
        console.log(new_users[i]+' username is available!')
    }
}