function make_car(manufacturer,model,options)
{
    car_dict={
        'manufacturer': manufacturer.title(),
        'model':model.title(),
    }
    for(var i=0;i<options.items().length;i++)
    {
        car_dict[i]=options.items()[i]
    }
    return car_dict
}
my_outback = make_car('subaru', 'outback', color='blue', tow_package=true)
console.log(my_outback)

my_accord = make_car('honda', 'accord', year=1991, color='white', headlights='popup')
console.log(my_accord)
