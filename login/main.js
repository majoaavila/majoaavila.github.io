//Aqui se define el comportamiento (funcion de validacion) del boton 'sign in', segun su id, esto cuando se de 'click'.
document.getElementById('signInBtn').addEventListener('click', validation);

function validation() {
    //se declaran las variables que corresponden a los inputs del email y del password
    let emailInput = document.getElementById('emailInput');
    let passwordInput = document.getElementById('passwordInput');

   // se imprimen los valores obtenidos de los inputs para ver si los valores se estan guardando 
    console.log('emailInput', emailInput.value)
    console.log('passwordInput', passwordInput.value)

    // si el valor del email y del password corresponden a los valores establecidos:
    if(emailInput.value == 'majo@gmail.com' && passwordInput.value == '1234') {
        //manda un alert donde diga que se inicio sesion
        alert('Iniciaste sesion')
    } else {
        //si no corresponden, entonces se envia un alert con el siguiente msj
        alert('Ingresaste datos incorrectos')
    }
}