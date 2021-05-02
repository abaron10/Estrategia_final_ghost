----------------------------------------------------------------------------
--------------------MONKEY DE PRUEBAS EN LOS ESTUDIANTES.COM----------------
----------------------------------------------------------------------------
                                               Desarrollado por Andrés Barón
                                               Version 2.0
----------------------------------------------------------------------------

1.  Prerrequisitos:
    Cypress es una librería lanzada en 2016 que brinda un conjunto de 
    herramientas que se compone principalmente del test runner y del dashboard
     con los resultados de la ejecución, los cuales permiten automatizar 
     navegadores como Chrome, Chromium, Edge, Electron y Firefox. 
     Para instalarlo ejecutar el comando:

                            npm install -g cypress

2.  Desarrollo:
    Esta prueba fue desarrollada con el fin de probar algunas funcionalidades 
    de la pagina web , mediante funciones JS con enfoque a cypress , se 
    automatizaron distintas posibilidades de interacción dentro de la pagina. 
    Una vez listas las funciones se orquestaron de forma automatica con un 
    condicional.

                            var random = getRandomInt(0,4);
                            if(random == 0){
                                randomButton();
                                randomInput();
                            }
                            else if(random == 1){
                                randomInput();
                                randomButton();
                            }
                            else if(random == 2){
                                randomLink();
                                randomButton();
                            }
                            else{
                                randomLink();
                                randomButton();
                            }

    Al ejecutar las funciones se reduce el numero de monkeys en uno ,
    dandole paso a la siguiente invocacion de la funcion randomEvent(), pero 
    esta vez con menos monkeys , esto con el proposito de no quedar 
    en un condicional infinito.

3.  Ejecución:
    Ejecutar el comando "cypress open" en consola y dar click a la prueba 
    "monkey_testing_andres.spec.js" , alli se podran evidencias diferentes 
    escenarios aleatorios de las pruebas desarrolladas, algunas de ellas son 
    clicks alteatorios a enlaces , botones y escribir textos aleatorios donde 
    se encuentre el respectivo tag de texto.

    NOTA:
    Si bien en la linea 57 se implemento la funcion para 'select' aleatorios ,
    la pagina no contiene estos elementos por lo que aveces puede presentar 
    problemas en la ejecución y arrojar error, por lo cual para esta instancia esta comentada.

4.  Conclusión:
    Cypress es un software poderoso que nos permite realizar pruebas con el fin 
    de encontrar errores que un tester no puede identificar tan facilmente, y su
    atractivo mas fuerte , es que son muy economicas y rapidas de desarrollar y
    ejecturar, sin duda una herramienta que debemos tener en cuenta a la hora 
    de realizar una planeación de pruebas.
