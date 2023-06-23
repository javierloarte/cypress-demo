 //console.log("Hola mundo")


// Definir Vairblas
var age = 20; // numero
let name = "Javier" // cadena (string)
let dog = true // boleando
const ubigeo = 'Lima'

/* 
age = 54
name = "Rosa"
 */

console.log(age, name, dog, ubigeo);

// CONCATENACION 

// Forma 1
let great = "Hola " + name + 'tiene' + age + "edad"
 console.log(great);

// Fomra 2 - comillas invertidas
let great2 = `Bienvenido ${name} , tiene ${age} edad`
 console.log(great2);


// funciones
// Declarar forma 1
function login (){
    let usu = 'jav';
    let pass = "123";
    console.log(usu, pass)
}

 login()


// Declarar forma 2
let forget = function(){
    console.log("Forget")
}
 forget()
console.log("otros temas")


// FUNCION CON PARAMETRO DE ENSTRADA
function inicioSesion (usu, pass){
    console.log(usu, pass)
}

 inicioSesion("javierlo", '123')
 inicioSesion("alfred", "654321")

function saludo (nombre){
    console.log(`Bienvenido ${nombre}` )
}

saludo("diego")
saludo("messi")


// funcionaes con parametro de entrada

function suma(num1, num2){
    return num1 + num2
}

let resultado = suma(3,40)
console.log(resultado)


// funcionaes con parametro de entrada

let adicion = (num1, num2) => num1 + num2
let igual = adicion(6,42)
console.log(igual)

// ejercicio 1
// ejecitar una funcion  que tenga 3 parametros de entrada
// param 1: victor

function ejercicio (name, num1, num2){
    return `Hola ${name} , tu multiplicacion es ${num1*num2}`
}

let test = ejercicio("javier",3,6)
console.log(test)

// Otras funciones 

let describe = function(nameTest, call){
    console.log(nameTest)
    call();
}

describe("Mi primer test", function(){
    console.log("Ejecutando Callback")
});


// Tipo e datos: Arreglos o Array
let frutas = ["manzana", 'pera', 'naranja']
frutas[1] = "platano"
console.log(frutas[1])

let invalidMail = ["@asd", "asd.com","$$%&"]
/* console.log(invalidMail[0]);
console.log(invalidMail[1]);
console.log(invalidMail[2]); */
invalidMail.forEach(function(value,index) {
    console.log(value, index)
});
console.log(invalidMail)

// CONDICIONALES
let isMarried = false

if (isMarried){
    console.log("Esta casado")
} else {
    console.log("no lo esta")
}

// CONDEICIONAL CON CADENA
let ubicacion = "LIMA"

if (ubicacion === "LIMA"){
    console.log("Esta en lima");
} else {
    console.log("esta fuera");
}


console.log("------------------------------------------------------")
// funcnciona invalida mail

let invalidMailtest = ["@asd", "asd.com","$$%&"]
invalidMailtest.forEach(function(value,index) {
    if(index === 1){
        invalidMailtest[index] ="Hola Mundo"
    }
    console.log(value, index)
});
console.log(invalidMailtest)

console.log("----OBJETOS--------------------------------------------------")
// OBJETOS
let persona = {
    age : 33,
    name : "messi",
    frutas : ["arandano", "mandarina"],
    pet: false,
    ubicacion : {
        id: 1234,
        name: "CR7"
    },
    get: () => {
        console.log("Holas")
    }
}

console.log(persona.frutas[1])
console.log(persona.ubicacion.name)


let cy = {
    intercept: function(param1, param2, param3){
        console.log(param1, param2, param3.fixture)
    }
}

// arreglo de objetos

console.log("----Arreglos--------------------------------------------------")
let users = [{
    name: "Javi",
    age: 34,
    },{
        name: "Bale",
        age: 21,
    },{
        name: "Mbape",
        age: 34,
    }]
console.log(users[2].name)