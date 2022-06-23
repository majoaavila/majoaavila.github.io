//funcion que permitira imprimir los datos en la pantalla
function loadUserData() {
    //se crea la sesion
    let user = getSession();

    //imprime los datos indicados al <p id='saldo> </p> y al <h1 id="usuario"></h1>
    document.getElementById('usuario').innerHTML = user.name;
    document.getElementById('saldo').innerHTML = `$${user.cash}`;
    document.getElementById('cardNumber').innerHTML = user.cardNumber;
    document.getElementById('cardName').innerHTML = user.name;
    document.getElementById('userCVV').innerHTML = user.cvv;

    //define el comportamiento de cada boton, al hacer click, se acciona las funciones depositar() y retirar() respectivamente
    document.getElementById('depositarBtn').addEventListener('click', depositar);
    document.getElementById('retirarBtn').addEventListener('click', retirar)
    document.getElementById('cerrarSesion').addEventListener('click', cerrarSesion)

}

//se regresa la funcion
loadUserData();

//funcion que permite actualizar el saldo del usuario
function updateUserCash(cash) {
    let user = getSession();
    user.cash = cash;
    updateUser(user);
    return getSession();
}

//funcion que permite hacer un deposito de dinero a la cuenta
function depositar() {
    //aqui se tomara el valor introducido en el input de monto
    let monto = document.getElementById('monto').value;

    //se crea la sesion del usuario
    let user = getSession();

    //se define la operacion de la funcion, esta sumara al saldo actual, el monto ingresado
    let saldoTotal = user.cash + parseInt(monto);

    //se implementa condicional de la regla de negocio: 'no se pueden tener mas de $990 en la cuenta'
    if(saldoTotal && monto) {
        if (saldoTotal > 990) {
            Swal.fire(
                'Depósito rechazado',
                'No puedes tener más de $990 en tu cuenta',
                'error'
            );
    
        } else {
            //si se respeta esta regla, entonces se procede a realizar la operacion
            user = updateUserCash(saldoTotal);
            document.getElementById('saldo').innerHTML = `$${user.cash}`;
        }

    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'info',
            title: 'Ingresa un monto'
        });
    }
    
}

//funcion que permite hacer un retiro de dinero a la cuenta
function retirar() {
    //aqui se tomara el valor introducido en el input de monto
    let monto = document.getElementById('monto').value;

    //se crea la sesion del usuario
    let user = getSession();

    if (user.cash && monto) {
        //se implementa condicional de la regla de negocio: 'no se pueden tener menos de $10 en la cuenta'
        //si el saldo actual del usuario es mayor o igual al monto introducido, entonces
        if (user.cash >= monto) {
            //se define la operacion de la funcion, esta estara al saldo actual, el monto ingresado
            let saldoTotal = user.cash - parseInt(monto);

            //mientras se cumpla la primera condicion, ademas de que el saldoTotal sea menor a 10
            if (saldoTotal < 10) {
                //muestra la siguiente notificacion
                Swal.fire(
                    'Retiro rechazado',
                    'No puedes tener menos de $10 en tu cuenta',
                    'error'
                );

                //sino, se realiza la operacion
            } else {
                user = updateUserCash(saldoTotal);
                document.getElementById('saldo').innerHTML = `$${user.cash}`;
            }

        } else {
            //si el saldo actual es menor al monto ingresado
            //muestra la siguiente notificacion
            Swal.fire(
                'Saldo insuficiente',
                'Intenta con un monto menor',
                'error'
            );
        }

    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
        Toast.fire({
            icon: 'info',
            title: 'Ingresa un monto'
        });
    }
}

//cerrar sesion
function cerrarSesion() {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}