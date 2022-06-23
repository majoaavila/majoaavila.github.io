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
    if(userName && password) {
    //si el usuario es valido, es decir, ya esta creado y los valores de sus atributos coinciden, entonces
    if(user) {
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
























//////////////////////////////////////

// si funcionaaaaaaaaa
// function validation() {
//     //se declaran las variables que corresponden a los inputs del email y del password
//     let emailInput = document.getElementById('emailInput');
//     let passwordInput = document.getElementById('passwordInput');

//     // se imprimen los valores obtenidos de los inputs para ver si los valores se estan guardando 
//     console.log('emailInput', emailInput.value)
//     console.log('passwordInput', passwordInput.value)

//     // si el valor del email y del password corresponden a los valores establecidos:
//     if((emailInput.value && passwordInput.value) !=='') {
//     if ((emailInput.value == 'majo@gmail.com' && passwordInput.value == '1234')||(emailInput.value == 'valentina12@gmail.com' && passwordInput.value == 'lola')||(emailInput.value == 'raquelerika@gmail.com' && passwordInput.value == '263263')) {
//         //manda una noti donde diga que se inicio sesion
//         // const Toast = Swal.mixin({
//         //     toast: true,
//         //     position: 'top-end',
//         //     showConfirmButton: false,
//         //     timer: 3000,
//         //     didOpen: (toast) => {
//         //         toast.addEventListener('mouseenter', Swal.stopTimer)
//         //         toast.addEventListener('mouseleave', Swal.resumeTimer)
//         //     }
//         // });
//         // Toast.fire({
//         //     icon: 'success',
//         //     title: 'Inicio de sesión exitoso'
//         // });

//         window.location.href = 'bankAccount.html';
            
        
//     } else {
//         //si no corresponden, entonces se envia una noti con el siguiente msj
//         const Toast = Swal.mixin({
//             toast: true,
//             position: 'top-end',
//             showConfirmButton: false,
//             timer: 3000,
//             didOpen: (toast) => {
//                 toast.addEventListener('mouseenter', Swal.stopTimer)
//                 toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//         });
//         Toast.fire({
//             icon: 'error',
//             title: 'Verifica los datos que ingresaste',
//             text: 'Usuario inexistente o datos incorrectos :('
//         });

//     }
// }  else {
//     const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 3000,
//         didOpen: (toast) => {
//             toast.addEventListener('mouseenter', Swal.stopTimer)
//             toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//     });
//     Toast.fire({
//         icon: 'info',
//         title: 'Todos los datos son requeridos'
//     });
// }
// }


