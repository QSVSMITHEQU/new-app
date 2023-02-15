//Ejercicio 1 de Proyecto
//turn to typescript
//string number nummber alias persona gestor and cliente 
//mensaje. string string mensaje union three values 

type Persona = { nombre: string, dinero: number, numero:string, && numCuenta: string | number,
saldoDisponible: number };


let gestor: Persona;
let cliente: Persona;
   

//union literal
//let z: number | string = 4;

let mensaje: 'juanito' | 'pepito' | 'hola gestor';
let mensaje = {
    emisor: "Juanito",
    receptor: "Pepito",
    mensaje: "Hola gestor"
};
let transferencia = {
    emisor: 4324234,
    receptor: 5435435,
    dineroTransferencia: 400
};
//Ejercicio 2 de Proyecto
let gestor3 = Object.keys(gestor);
for (const key of gestor3) {
    console.log(key);
}
let cliente3 = Object.keys(cliente);
for (const key of cliente3) {
    console.log(key);
}
let mensaje3 = Object.keys(mensaje);
for (const key of mensaje3) {
    console.log(key);
}
let transferencia3 = Object.keys(transferencia);
for (const key of transferencia3) {
    console.log(key);
}

////////////////////////////////////////////////////

// función normal
function calculo(altura:number)=number {
    return 5 * altura / 2;:n
};
function triangulo(base:nu,altura:number)=number{
    return base * altura / 2;
}
console.log(calculo(5));
console.log(triangulo(3,8));

// función de flecha
const funcion1 = (altura:number)=number => {
    return 5 * altura / 2;
};
console.log(funcion1(6));

// forma simplificada de la función de flecha
const funcion2 = (altura= number):number => 5 * altura / 2;
console.log(funcion2(10));




//the way to transform the code into a typescript const z = 100;
const sumar = (x, y) => {
    return x + y + z;
    }
    console.log(sumar(1, 2))

    //typescript   
    // función tipada
function sumar1(x: number, y: number): number {
    return x + y;
    }
    // función anónima tipada con inferencia de tipo
    const sumar2 = function(x: number, y: number): number { return x + y; };
    // función de flecha tipada con inferencia de tipo
    const sumar3 = (x: number, y: number): number => x + y;
    // función de flecha tipada sin inferencia de tipo (se utiliza el tipo Function)
    const sumar4: Function = (x: number, y: number): number => x + y;
    // creación de una variable que posteriormente almacenará una función
    let sumar5: Function; 

