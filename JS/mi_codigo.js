
let ciudades = [];

function configuracion() {

    //Mapeamos los valores que nos interesan
    ciudades = datum.map((c)=> new Ciudad(c[""], c["Tomato (1kg)"], c["Fitness Club, Monthly Fee for 1 Adult"], c["Price per Square Meter to Buy Apartment in City Centre"], c["Price per Square Meter to Buy Apartment Outside of Centre"],c["Average Monthly Net Salary (After Tax)"]));

}
function principal(){
  /***    ###########################################
     *    #            TU CÓDIGO AQUÍ               #
     *    ###########################################
     * */

    //Muestra por consola el total de ciudades que hay
    console.log("Total:"+ ciudades.length);

    //Crea una lista con los nombres de las ciudades usando Map
     let nombre_ciudades = ciudades.map(n=>n.nombre);

    //Muestra por consola el listado de los nombres de las ciudades que aparecen
            /** Ejemplo 
             *         nombres = ["A", "B", "C"];
             *         nombres.forEach(n => {console.log(n);});
             */
            nombre_ciudades.forEach(c => console.log(c));


    // Crea una lista con las ciudades que son de España
    // Usa el método 'includes' de String (Ejemplo filter(x => x.nombre.includes("Italy")) )
    ciudades_españa = ciudades.filter(c => c.nombre.includes("Spain"));

    ciudades_españa.forEach(c=>console.log(c));


    // Calcula el precio medio de los tomates en Alemania "Germany" usa Map para crear una lista de precios de tipo Float
    // A continuación usa reduce para calcularlo y mostrarlo por consola

                /** Ejemplo Calculo de salario medio
                            lst_salario = [1.2, 4.2, 4.2];
                            salario_medio_pais = lst_salario.reduce((total, x, index, array) => {
                            total += x;
                            if( index === array.length-1) { 
                            return total/array.length;
                            }else { 
                            return total;
                            }
                        });
                */

        ciudades_Alemania= ciudades.filter(c=>c.nombre.includes("Germany"));
        //ciudades_Alemania.forEach(a=>console.log(a))
        lst_precios =ciudades_Alemania.map(c=>parseFloat(c.precio_tomate));
        //lst_precios.forEach(a=>console.log(a)) ;
        
        precio_medio_tomate = lst_precios.reduce((acumulador, x, index, array) => {
            acumulador += x;
            if( index === array.length-1) { 
            return acumulador/array.length;
            }else { 
            return acumulador;
            }})

        console.log("El precio medio de los tomates en Alemania es:"+ precio_medio_tomate)

    

      //Ordena la lista por 'salario_medio'
                  /** Ejemplo lista_ordenada por precio gimnasio
                   *    ord_precio_gym = ciudades.sort((x,y) => parseFloat(y.precio_gym) - parseFloat(x.precio_gym))
                   *   
                   */
    //Muestra las ciudades usando la consola.

        ord_precio_gym = ciudades.sort((c1,c2) => parseFloat(c2.salario_medio) - parseFloat(c1.salario_medio));
        //console.log(ord_precio_gym)

        ciudades = ord_precio_gym.map(c=>c.nombre);
        precio= ord_precio_gym.map(c=>c.precio_gym);

        ciudades.forEach(c=>console.log("Ciudad:"+c));
    

}

class Ciudad{
    constructor(nombre, precio_tomate, precio_gym, precio_m2_centro,precio_m2_lejos_centro, salario_medio){
        this.nombre = nombre;
        this.precio_tomate = precio_tomate;
        this.precio_gym = precio_gym;
        this.precio_m2_centro = precio_m2_centro;
        this.precio_m2_lejos_centro = precio_m2_lejos_centro;
        this.salario_medio = salario_medio;
    }

}
