//Variables, datos y operadores
//Ejercicios
//Cuando la consigna pida ingresar algo hacerlo mediante un prompt, y cuando pida mostrar un mensaje hacerlo mediante alert. Usar const, let y template strings.


/*//Ejercicio Saludo
//Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".
let nombre=prompt( "¿Cual es su nombre?" );
let apellido=prompt( "¿Cual es su apellido?" );
alert (`Hola, ${nombre} ${apellido},bienvenida a Ada.`)*/

/*//Heladería
//Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".
let gustoUno=prompt( "Ingrese el primer gusto de helado" );
let gustoDos=prompt( "Ingrese el segundo gusto de helado" );
let gustotres=prompt( "Ingrese el tercer gusto de helado" );
alert(  ` Aquí tiene su helado de ${gustoUno}, ${gustoDos} y ${gustotres}.  `   )*/


//Datos personales
//Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.
/*let nombre=prompt( "Ingrese su nombre" );
let apellido=prompt( "Ingrese su apellido" );
let edad= Number (prompt( "Ingrese su edad" )) ;
let nacionalidad=prompt( "Ingrese su nacionalidad" );
let dni= Number (prompt( "Ingrese su DNI" ))  ;

alert(  ` Nuevo usuario agregado al sistema: ${ nombre} ${apellido}, ${edad } años, ${nacionalidad},DNI: ${ dni}.  `   );*/

//Lista de reproducción
//Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".
/*let nombrePlaylist=prompt( "Ingrese nombre de playlist" );
let cancionUno=prompt( "Ingrese nombre de cancion" );
let cancionDos=prompt( "Ingrese nombre de cancion" );
let cancionTres=prompt( "Ingrese nombre de cancion" );
alert(  ` Se ha creado la playlist ${ nombrePlaylist} con las canciones: ${cancionUno}, ${cancionDos } y ${cancionTres}.  `   );*/

//Dirección completa

//Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".
/*let calle=prompt( "Ingrese el nombre de su calle" );
let numero= Number (  prompt( "Ingrese el numero de la calle" ) ) ;
let depto= Number ( prompt( "Ingrese el numero de depto si no es un depto omita la informacion" ) ) ;
let cp= Number (  prompt( "Ingrese el codigo postal" ) );
let ciudad=prompt( "Ingrese la cuidad a la que pertenece" );
let pais=prompt( "Ingrese su pais" );
alert ( ` La dirección que ha ingresado es: ${calle} ${numero}, ${depto},  CP:${cp} ,  ciudad ${ciudad} , ${pais}.  `)  ;*/



//Años perro
//Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.
/*let aniosHumanos= Number (  prompt( "Ingrese la edad del perro en años humanos" )) ;
let aniosPerrunos= Number  ( aniosHumanos*7 ) 
alert (`El perro tiene ${aniosPerrunos} años perrunos.`)*/


//Minutos a segundos
//Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos.
/*let minutos= Number (  prompt( "Ingrese la cantidad de minutos a convertir a segundos" )) ;
let minSeg=Number( minutos *60);
alert(`${minutos} minuto equivale a  ${minSeg} segundos.`);*/

//Días a segundos
//Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.
/*
let dias= Number (  prompt( "Ingrese la cantidad de dias a convertir a segundos" )) ;
let diasSeg=Number( dias *86400);

alert (`${dias} días equivalen a ${diasSeg} segundos.`);
//Kilómetros a millas
//Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas.
let km= Number (  prompt( "Ingrese la cantidad de kiometros a convertir en millas" )) ;
let kmMillas=Number( km *0.621371);

alert (`${km} kilómetros equivalen a ${kmMillas} millas.`);
//Área de un triangulo
//Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.
let base= Number (  prompt( "Ingrese el valor de la base del triángulo en centímetros. " )) ;
let altura= Number (  prompt( "Ingrese  el valor de la altura del triángulo en centímetros. " )) ;
let areaTriangulo=Number(base * altura/2 );
alert (`El area del triángulo es de ${areaTriangulo} centímetros.`);
//Perímetro de un rectángulo
//Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.
let alturaRect= Number (  prompt( "Ingrese el valor de la altura  del rectangulo en centímetros" )) ;
let anchoRect= Number (  prompt( "Ingrese  el valor de ancho del rectangulo en centímetros. " )) ;
let perimRectangulo= 2*alturaRect + 2* anchoRect;
alert (`El perímetro del rectángulo es de ${perimRectangulo} centimetros.`);
//Porcentaje
//Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.
let numero= Number (  prompt( "Ingrese un número" )) ;
let porcentaje= Number (  prompt( "Ingrese el porcentaje que desea obtener de ese número" )) ;
let resultPorcentaje= numero* porcentaje/100
alert (` el ${porcentaje}% de ${numero} es ${resultPorcentaje}.`);


//Tiempo de viaje
//Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

//Duración vuelo
//Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

//Incremento
//Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).

//Celsius a Fahrenheit
//Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit.

let gradosCelsius=Number(prompt("Ingrese la cantidad de grados Celsius a convertir en grados Farenheit"));
let gradosFarenheit=  gradosCelsius*32;
alert `La conversion de ${gradosCelsius}°C a grados Farenheit es de ${gradosFarenheit} F`;


//Múltiplos
//Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO

//Segundos a horas, minutos y segundos
//Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)

//Cantidad de caracteres
//Crear un programa que pida al usuario ingresar un texto y muestre un mensaje con la cantidad de caracteres que tiene ese texto. INVESTIGAR CÓMO HACERLO
*/
//Cantidad de huéspedes
//Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.
/*let habitacionesDos=Number(prompt("¿Cuántas habitaciones  para dos personas tiene el hotel?"));
let habitacionesTres=Number(prompt("¿Cuántas habitaciones  para tres personas tiene el hotel?"));
let habitacionesCuatro=Number(prompt("¿Cuántas habitaciones  para cuatro personas tiene el hotel?"));
let maximoHuespedes= habitacionesDos * 2 + habitacionesTres * 3 + habitacionesCuatro * 4;
alert(`La capacidad máxima del hotel, es de ${maximoHuespedes} húespedes.`);
//Calculador gastos*/
//Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.

let dineroDisponible=Number(prompt("¿Cuanto dinero disponible tiene?"));
let cantidadServicios=Number(prompt("Ingrese cuantos servicios desea abonar"));
let totalServicio= cantidadServicios - 1;
let servicio1=(prompt("Ingrese el nombre del  primer servicio "));
let servicioMonto1=Number(prompt("Ingrese el monto a abonar del primer servicio  "));
alert (`Restan por ingresar ${totalServicio} servicios .Su dinero disponible es de ${dineroDisponible - servicioMonto1}.`   );
let servicio2=(prompt("Ingrese el nombre del  servicio "));
let servicioMonto2=Number(prompt("Ingrese el monto a abonar del  segundo servicio "));
alert (`Restan por ingresar ${totalServicio - 1} servicios .Su dinero disponible es de ${dineroDisponible - servicioMonto1 - servicioMonto2}.`   );
let servicio3=(prompt("Ingrese el nombre del tercer servicio "));
let servicioMonto3=Number(prompt("Ingrese el monto a abonar del  tercer servicio "));
alert (`Restan por ingresar ${totalServicio - 2} servicios.Su dinero disponible es de ${dineroDisponible - servicioMonto1 - servicioMonto2 - servicioMonto3}.`   );
alert (`Los servicios a abonar son ${servicio1} con un valor de $${servicioMonto1},  ${servicio2} con un valor de ${servicioMonto2} y  ${servicio3}  con un valor de $ ${servicioMonto3}.Su dinero disponible es de ${dineroDisponible - servicioMonto1 - servicioMonto2 - servicioMonto3}.Gracias por utilizar nuestro servicio.`)


//Orden de compras
//Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables.

let ordenBurger=Number(prompt("¿Cuántas Hamburguesas Big desea comprar?"   ));
let ordenPapas=Number(prompt("¿Cuántas Papas con cheddar y bacon desea comprar?"));
let ordenBebida=Number(prompt("¿Cuántas bebidas desea comprar?"));

let precioBurguer= ordenBurger * 1500;
let precioPapas= ordenPapas * 600;
let precioBebida= ordenBebida * 600;
let total= precioBurguer +  precioPapas +  precioBebida ;


alert ( `El valor total de su compra es de ${total} ` );

let cuotas=Number(prompt("¿Desea abonar en 3, 6 o 12 cuotas?"   ));
let valorCuotas= total/cuotas;

alert (`El resumen de su compra es de : ${ordenBurger} Hamburguesas Big, ${ordenPapas} Papas con cheddar y bacon, ${ordenBebida} Bebida. Su total es de ${total} .El  medio de pago elegido es de  ${cuotas} cuotas   sin interes de $ ${valorCuotas} .¡Gracias por su compra ! :) .  ` );

  












