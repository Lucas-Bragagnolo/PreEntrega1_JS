alert("Bienvenido a la Plataforma!");


function mostrar(valor) {
    console.log(valor);
}






let pinGuardado = "2802";
let ingresar=false;
const TARIFA = 380;
let tarifa1 = TARIFA;
let tarifa2 = TARIFA*2;
let tarifa3 = TARIFA*3;

for(let i = 3; i >= 1; i = i - 1) {
    let pinIngreso = prompt("Ingresá el PIN"); 
    let validarIngreso = pinGuardado === pinIngreso;
    if(validarIngreso) {
        alert("Ingreso con exito")
        ingresar = true;
        break;
        

    } else {
        alert("Error PIN Incorrecto");
    }
}


//Segunda pantalla
if(ingresar) {
    //menu 
    let saldo = 1000;


    function recargar(valor) {
        saldo= saldo + valor;
    }
    function pagar(valor) {
        if(saldo<valor) {
            alert("Saldo insuficiente");
        } else {
            saldo = saldo - valor;
            alert("Viaje exitoso! Pagaste: $" + valor +".00\nAhora tu saldo es de: " + saldo + "\nMuchas Gracias!");
        }        
    }


    
    
    let opcion = prompt (
        "Elegí una opcion: \n1- Consultar Saldo \n2- Iniciar Viaje \n3- Recargar saldo. \nPresioná X para salir"
    );
    while(opcion != "x") {

        if(opcion=="1") {
            alert("Tu saldo es " + saldo);

        } else if(opcion=="2") {
            let puntoDestino;            
            let puntoPartida = prompt ("Donde empieza el viaje?: \n1-Constitución \n2-Flores \n3-Liniers");
            switch(puntoPartida) {
                case "1":
                    puntoDestino = prompt ("A dónde vas?: \n1- Hasta Corrientes y callao (" + tarifa1 + ") \n2-Hasta Alto Palermo (" + tarifa2 + ") \n3-Hasta Barrio Chino (" + tarifa3 + ")\nSaldo: $" + saldo);
                    switch(puntoDestino) {
                        case "1":
                                pagar(tarifa1);                    
                            break;
                        case "2":
                                pagar(tarifa2);
                            break;
                        case "3":
                                pagar(tarifa3);
                            break;
                        default:
                            alert("Punto de destino incorrecto");
                    }
                    break;
                case "2":
                    puntoDestino = prompt ("A dónde vas?: \n1-Av.Avellaneda y la Av. plata ($" + tarifa1 + ") \n2-Plaza Almagro ($" + tarifa2 + ")\n3-Plaza de mayo ($" + tarifa3 + ") \nSaldo: $" + saldo);
                    switch(puntoDestino) {
                        case "1":
                                pagar(tarifa1);                    
                            break;
                        case "2":
                                pagar(tarifa2);
                            break;
                        case "3":
                                pagar(tarifa3);
                            break;
                        default:
                            alert("Punto de destino incorrecto");
                    }
                    break;
                case "3":
                    puntoDestino = prompt ("A dónde vas?: \n1-V.del Parque ($" + tarifa1 + ") \n2-V.Urquiza ($" + tarifa2 + ")\n3-Colegiales ($" + tarifa3 + ")\nSaldo: $" + saldo);
                    switch(puntoDestino) {
                        case "1":
                                pagar(tarifa1);                    
                            break;
                        case "2":
                                pagar(tarifa2);
                            break;
                        case "3":
                                pagar(tarifa3);
                            break;
                        default:
                            alert("Punto de destino incorrecto");
                    }
                    break;
                default:
                    alert("Punto de partida incorrecto");
            }
            mostrar(puntoDestino);
            mostrar(saldo);
        
        } else if(opcion=="3") {
                let deposito = prompt ("Ingresá el monto a recargar:");
                saldo = saldo + +deposito;
            alert("Recarga exitosa! tu saldo es: " + saldo);
        } 

        //condicion de salida
        opcion = prompt (
            "Elegí una opcion: \n1- Consultar Saldo \n2- Viajar \n3- Recargar \nPresioná X para salir"
        );
    }



} else {
    alert("Se te acabaron los intentos");
}
