function city_country(city,country)
{
    return ('\"'+city+', '+country+'\"')
}
var st=[city_country('Lahore','Pakistan'),city_country('Karachi','Pakistan'),city_country('Newyork','USA')]
for(var i=0;i<st.length;i++)
{
    console.log(st[i])
}