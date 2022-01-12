/* Buenos días 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5 */



let hora = parseInt(prompt("¿Cuál es la hora?"));

if((hora >= 6) && (hora < 12))
{
    document.write("Buenos días")
}
else if ((hora >= 12) && (hora < 19))
{
    document.write("Buenos tardes")
}
else if ((hora >= 19) && (hora <= 23))
{
    document.write("Buenas noches")
}
else if ((hora >= 0) && (hora <= 6))
{
    document.write("Dejame dormir")
}
else {
    document.write("Hora no valida")
}