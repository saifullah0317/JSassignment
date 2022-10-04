function show_magicians(x)
{
    for(var i=0;i<x.length;i++)
    {
        console.log(x[i])
    }
}
function make_great(x)
{
    for(var i=0;i<x.length;i++)
    {
        x[i]=x[i]+' the great'
    }
}
var magicians=['Eric','John','Ali']
var magicians1=[...magicians]
make_great(magicians1)
show_magicians(magicians)
show_magicians(magicians1)