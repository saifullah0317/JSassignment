function make_car(manufacturer1,model1)
{
    var obj={manufacturer:manufacturer1,model:model1}
    for(var i=2;i<arguments.length;i++)
    {
        Object.assign(obj,arguments[i])
    }
    return obj
}
var instance_obj=make_car('Honda','City 2019','white')
console.log(instance_obj)
