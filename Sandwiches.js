function make_sandwich(items)
{
    console.log("I\'ll make you a great sandwich:")
    for(var i=0;i<items.length;i++)
    {
        console.log('  ...adding ' + items[i] +' to your sandwich.')
    }
    console.log('Your sandwich is ready!')
}
var item1=['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon']
make_sandwich(item1)
var item2=['turkey', 'apple slices', 'honey mustard']
make_sandwich(item2)
var item3=['peanut butter', 'strawberry jam']
make_sandwich(item3)