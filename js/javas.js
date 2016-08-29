
var calcular =parseInt(prompt("Ingresa que operacion quieres hacer:\n"+ "1. Suma\n" + "2. Resta\n" + "3. Multiplicación\n" + "4. División\n" + "5. Resto\n" "6. Mayor que \n" + "7. Menor que\n" + "8. Igual que\n"));
var numero1 =parseInt(prompt("Ingresa el primer numero"));
var numero2 =parseInt(prompt("Ingresa el segundo numero"));

switch(calcular)
{
	case 1 :
		var suma=(numero1 + numero2); 
		document.write("La suma es " + suma); 
		break
	case 2 :
		var resta=(numero1 - numero2);
		document.write("La resta es " + resta); 
		break
	case 3 :
		var multiplicar=(numero1 * numero2); 
		document.write("La multiplicación es " + multiplicar); 
		break
	case 4 :
		var dividir=(numero1 / numero2);
		document.write("La división es " + dividir) ;
		break
	case 5 :
		var resto=(numero1 % numero2);
		document.write("El resto es " + resto) ;
		break
	case 6 :
		var mayor=(numero1 > numero2); 
		document.write("¿Es mayor?: " + mayor); 
		break
	case 7 :
		var menor=(numero1 < numero2);
		document.write("¿Es menor?: " + menor); 
		break
	case 8 :
		var igual=(numero1 == numero2); 
		document.write("¿Son iguales?: " + igual); 
		break
	default :
		document.write("Es un error");
		break
}
		




