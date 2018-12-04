
var saldoCuenta = 10000;
var nombreUsuario = "Roberto Perez";
var limiteExtraccion = 5000;

var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570;

var dineroAextraer;
var dineroAdepositar;


var cuentaAmiga1 = 123456;
var cuentaAmiga2 = 765431;

var codigoDeCuenta = 3220;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();



//Funciones que tenes que completar

function restarDinero(monto) {
    saldoCuenta -= monto;

}

function sumarDinero(monto) {
    saldoCuenta += monto;

}

function cambiarLimiteDeExtraccion() {
    var cambiarLimiteDeExtraccion = prompt("Ingrese un nuevo límite de extracción:");
    if (cambiarLimiteDeExtraccion == null || cambiarLimiteDeExtraccion == "") {
        alert("No se ingreso el nuevo límite de Extracción.");
    } else if (isNaN(cambiarLimiteDeExtraccion)) {
        alert("Ingresa solo el monto.");
    } else {
        limiteExtraccion = parseInt(cambiarLimiteDeExtraccion);
        alert("El nuevo límte de extraccón es: $" + limiteExtraccion);
        actualizarLimiteEnPantalla();
    }
}

function mostrarOperacion(alertaOperacion, accionOperacion, transaccionDinero) {
    alert(
        "Has" + alertaOperacion + ": $" + transaccionDinero + "\n" +
        "Saldo anterior:$" + accionOperacion + "\n" +
        "Saldo actual:$" + saldoCuenta
    );
}

function extraerDinero() {
    var extraerDinero = prompt("Ingrese la cantidad de dinero que desea extraer:");
    if (extraerDinero == null || extraerDinero == "") {
        alert("No se ingreso el monto a extraer.");
    } else {
        dineroAextraer = parseInt(extraerDinero);
        if (dineroAextraer > saldoCuenta) {
            alert("No hay suficiente dinero para extraer esa cantidad de dinero.");
        } else if (dineroAextraer > limiteExtraccion) {
            alert("La cantidad a extraer es mayor a tu limite de extraccion.");
        } else if (isNaN(dineroAextraer)) {
            alert("Solo ingresar el monto.");
        } else if (extraerDinero % 100 !== 0) {
            alert("solo puedes extraer billeter de 100.");
        } else {
            restarDinero(dineroAextraer);
            mostrarOperacion(
                "retirado",
                saldoCuenta + dineroAextraer,
                dineroAextraer
            );
            actualizarSaldoEnPantalla();



        }
    }
}
function depositarDinero() {
    dineroAdepositar = prompt("Ingrese la cantidad de dinero que desea depositar:");
    if (dineroAdepositar == null || dineroAdepositar == "") {
        alert("No se ingreso monto para dipositar.");
    } else if (isNaN(dineroAdepositar)) {
        alert("Ingresa solo el monto.");
    } else {
        dineroAdepositar = parseFloat(dineroAdepositar);
        sumarDinero(dineroAdepositar);
        mostrarOperacion(
            "depositado",
            saldoCuenta - dineroAdepositar,
            dineroAdepositar
        );
        actualizarSaldoEnPantalla();
    }
}
function pagoDeServicio(servicio, precioDeServicio) {
    if (saldoCuenta < precioDeServicio) {
        alert("No hay suficiente saldo para pagar este servicio.");
    } else {
        alert(
            "Has pagado el servicio" + servicio + ".\n" +
            "Saldo anterior: $" + saldoCuenta + "\n" +
            "Dinero descontado : $" + precioDeServicio + "\n" +
            "Saldo actual : $" + (saldoCuenta - precioDeServicio)
        );
        restarDinero(precioDeServicio);
        actualizarSaldoEnPantalla();
    }
}

function pagarServicio() {
    var servicioApagar = prompt("Ingrese el número que corresponda con el servicio que quieres pagar:" + "\n" + "\n" +
        "1 - Agua" + "\n" +
        "2 - Luz" + "\n" +
        "3 - Internet" + "\n" +
        "4 - Teléfono" + "\n"
    );
    if (servicioApagar == null || servicioApagar == "") {
        alert("No ingreso ninguna opcion");
    } else {
        servicioApagar = parseInt(servicioApagar);
        switch (servicioApagar) {
            case 1:
                pagoDeServicio("Agua", precioAgua);
                break;
            case 2:
                pagoDeServicio("Luz", precioLuz);
                break;
            case 3:
                pagoDeServicio("Internet", precioInternet);
                break;
            case 4:
                pagoDeServicio("Telefono", precioTelefono);
                break;
            default:
                alert("No existe el servicio que has seleccionado.");
                break;
        }

    }



}

function transferiraCuenta(cuenta, montoAtransferir) {
    alert("Se transfirio $" + montoAtransferir + "\n" +
        "Cuenta destino:" + cuenta
    );
    actualizarSaldoEnPantalla();

}
function transferirDinero() {
    var montoATransferir = prompt("Ingrese el monto que desea transferir:");
    if (saldoCuenta < montoATransferir) {
        alert("No puede transferirse esa cantidad de dinero.");
    } else if (montoATransferir == null || montoATransferir == "") {
        alert("No ingreso monto para la transferencia.");
    } else if (isNaN(montoATransferir)) {
        alert("Ingrese solo el monto.");
    } else {
        var cuentaATransferir = prompt(
            "Ingrese el número de cuenta al que desea transferir el dinero:"
        );
        if (cuentaATransferir == null || cuentaATransferir == "") {
            alert("No ingreso cuenta para la transferencia.");
        } else {
            restarDinero(montoATransferir);
            cuentaATransferir = parseInt(cuentaATransferir);
            switch (cuentaATransferir) {
                case cuentaAmiga1:
                    transferiraCuenta(cuentaAmiga1, montoATransferir);
                    break;
                case cuentaAmiga2:
                    transferiraCuenta(cuentaAmiga2, montoATransferir);
                    break;
                default:
                    alert("Solo puede transferirse dinero a una cuenta amiga.");
                    break;
            }
        }
    }
}
window.onload = function () { iniciarSesion(); }

function alertaCodigoIncorrecto(mensaje) {
    alert(mensaje);
    nombreUsuario = "";
    saldoCuenta = 0;
    actualizarSaldoEnPantalla();
    actualizarNombreEnPantalla("");
}

function iniciarSesion() {
    var codigoVerificacion = prompt("Ingresa tu código de verificación:");
    if (codigoVerificacion == null || codigoVerificacion == "") {
        alertaCodigoIncorrecto("Usted no ingreso un código de verficación.");
    } else {
        if (codigoVerificacion == codigoDeCuenta) {
            alert(
                "Bienvenido/a " +
                nombreUsuario +
                " ya puedes comenzar a realizar operaciones."
            );
        } else {
            alertaCodigoIncorrecto(
                "Código incorrecto." + "\n\n" +
                "Tu dinero ha sido retenido por cuestiones de seguridad." + "\n\n"
            );
        }
    }
}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}