alert("Bienvenido a la Plataforma!");


function mostrar(valor) {
    console.log(valor);
}






let pinGuardado = "2802";
let ingresar=false;


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
    let saldo = 50000;

    function recargar(valor) {
        saldo= saldo + valor;
    }
    
    function pagar(valor) {
        saldo = saldo - valor;
    }
    

    let opcion = prompt (
        "Elegí una opcion: \n1- Consultar Saldo \n2- Iniciar Viaje \n3- Recargar saldo. \nPresioná X para salir"
    );
    while(opcion != "x") {

        if(opcion=="1") {
            alert("Tu saldo es " + saldo);

        } else if(opcion=="2") {

            let puntoPartida = prompt ("Ingresá el punto de partida: \n1-Constitución \n2-Flores \n3-Liniers");




            let puntoDestino = prompt ("Ingresá el punto de llegada: \n1-Constitución \n2-Flores \n3-Liniers");

            let validarViaje = puntoPartida != puntoDestino;

            if(validarViaje) {
                let montoViaje = prompt ("Ingresá el monto a pagar:");

                if(montoViaje > saldo){
                    alert("Saldo insuficiente");
                    opcion = prompt (
                        "Elegí una opcion: \n1- Consultar Saldo \n2- Iniciar Viaje \n3- Recargar saldo. \nPresioná X para salir"
                    );
                } else {
                    pagar(montoViaje);
                    alert("Viaje exitoso! Tu saldo es: " + saldo + "Muchas Gracias!");
                }
            } else {
                alert("Error! No se puede viajar al mismo punto");
            }







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
