//Aqui se define el comportamiento (funcion de validacion) del boton 'sign in', segun su id, esto cuando se de 'click'.
document.getElementById('signInBtn').addEventListener('click', validation);

//validacion de email y password
function validation() {
    //se declaran las variables que corresponden a los inputs del email y del password
    let userName = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    //variable que guarda el usuario validado
    let user = validUser(userName, password);

    //si se introducen valores en el emailInput y en el passwordInput
    if (userName && password) {
        //si el usuario es valido, es decir, ya esta creado y los valores de sus atributos coinciden, entonces
        if (user) {
            //crea la sesion
            createSession(user);
            //redirige a la pantalla del bankAccount
            window.location.href = 'bankAccount.html';

            //si no, entonces
        } else {
            //envia una notificacion que diga que el usuario es inexistente
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
                icon: 'error',
                title: 'Este usuario no existe'
            });
        }
    } else {
        //si no se introdujo algun valor en alguno de los inputs, entonces envia una notificacion que diga que todos los datos son requeridos
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
            title: 'Todos los datos son requeridos'
        });

    }
}