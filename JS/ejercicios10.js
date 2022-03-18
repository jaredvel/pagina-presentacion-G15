window.alert("Ejercicio 1")

var num = prompt ("¿Tienes surte hoy? Ingresa un número entre 100 y 10,000.")
var num = parseInt(num)

if (num==1000){
    window.alert("¡GANASTE UN PREMIO!")
}else{
    window.alert("Lo sentimos, sigue participando.")
}

window.alert("Ejercicio 2")

var num1 = prompt ("Ingresa un número")
var num2 = prompt ("Ingresa otro número")

var num1 = parseInt(num1)
var num2 = parseInt(num2)

if (num1<num2){
    window.alert("El número " + num1 + " es menor que " + num2)
}else{
    window.alert("El número " + num2 + " es menor que " + num1)
}

window.alert("Ejercicio 3")

var num1 = prompt ("Ingresa un número")
var num2 = prompt ("Ingresa otro número")
var num3 = prompt ("Ingresa un último número")


var num1 = parseInt(num1)
var num2 = parseInt(num2)
var num3 = parseInt(num3)


    if (num1>num2 & num1>num3){
        window.alert("El número " + num1 + " es mayor que " + num2 + " y " + num3)
    }if(num2>num1 & num2>num3){
        window.alert("El número " + num2 + " es mayor que " + num1 + " y " + num3)
    } if(num3>num1 & num3>num2){
        window.alert("El número " + num3 + " es mayor que " + num1 + " y " + num2)
    }else{
        window.alert("Los números son iguales, por favor ingrese diferentes")
    }


