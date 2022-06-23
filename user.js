//se define la expiracion de 'guardado' de los usuarios/objetos
const EXPIRATION_TIME = 500000;

//se crean los objetos (userAccounts)
const userAccounts = [
    {
        name: "María José Ávila",
        user: "mavila7@ucol.mx",
        cash: 675,
        password: "1234",
        cardNumber: "1234 5678 9101 1121",
        cvv: "445",
        expiration: "No"
    },

    {
        name: "Erika Amezcua",
        user: "raquelerika276@gmail.com",
        cash: 990,
        password: "lola",
        cardNumber: "1345 9054 2141 9099",
        cvv: "778",
        expiration: "No"
    },

    {
        name: "Juan Pedro Ramírez",
        user: "juperameza@hotmail.com",
        cash: 900,
        password: "kuper",
        cardNumber: "5567 4320 5087 4532",
        cvv: "223",
        expiration: "No"
    }
];

//singleton que usa el localstorage para traerse datos del usuario
function getUsers() {
    let users = localStorage.getItem('userAccounts');
    if (users == undefined || users == null) {
        localStorage.setItem('userAccounts', JSON.stringify(userAccounts));
        users = localStorage.getItem('userAccounts');
    }
    return JSON.parse(users);
}

//validación regresa error o regresa correcto (true o false)
function validUser(user, password) {
    let userObject;
    let users = getUsers();
    users.forEach(element => {
        if (element.user == user && element.password == password) {
            userObject = element;
            return;
        }
    });
    return userObject;
}

//vamos a recibir un objeto de usuario y lo vamos a guardar en localStorage
function createSession(user) {
    user.expiration = Date.now();
    localStorage.setItem('user', JSON.stringify(user));
}

//limpia una session en el localstorage
function closeSession() {
    localStorage.removeItem('user');
}

//obtiene una session en el localstorage
function getSession() {
    return JSON.parse(localStorage.getItem('user'));
}

//Revisar si una sesion aun sigue activa
function checkExpiration() {
    let user = getSession();
    //Comparacion para validar una sesion en milisegundos 
    if ((user.expiration + EXPIRATION_TIME) <= Date.now()) {//Date.now() nos regresa el tiempo actual en milisegundos
        return false;
    } else {
        return true;
    }
}

//Actualiza los valores del usuario para que la base de datos tenga los nuevos datos
function updateUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    let accounts = getUsers();
    //recorremos el arreglo de cuentas para encontrar el usuario actualizado
    accounts.forEach(element => {
        if (element.user == user.user && element.password == user.password) {//Compara usuario y cuentas
            element.name = user.name;
            element.user = user.user;
            element.cash = user.cash;
            element.password = user.password;
            element.cardNumber = user.cardNumber;
            element.cardName = user.name;
            element.cvv = user.cvv;
            element.expiration = user.expiration;
        }
    });
    //Actualiza el valor del localstorage que simula la base de datos
    localStorage.setItem('userAccounts', JSON.stringify(accounts));
}

getUsers();