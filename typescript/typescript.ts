// const saludos = (persona: string) => {
//     return "Hola, " + persona;
// }
// const usuario: string = "Marcos";
// console.log(usuario);
// document.body.innerHTML = saludos(usuario);

// función de flecha para la SUMA
const sumar = (param1: number,param2: number) : number=> {
    return param1 + param2;
};
console.log(sumar(6,3));

// forma simplificada de la función de flecha
const sumarSimple = (param1: number,param2: number): number => param1 + param2;
console.log(sumarSimple(6,3));

// función de flecha para RESTA
const restar = (param1: number,param2: number) => {
    return param1 - param2;
};
console.log(restar(6,3));
// forma simplificada de la función de flecha
const restarSimple = (param1: number,param2: number): number => param1 - param2;
console.log(restarSimple(6,3));

// función de flecha para la multiplicación
const multiplicar = (param1: number,param2: number): number => {
    return param1 * param2;
};
console.log(multiplicar(6,3));
// forma simplificada de la función de flecha
const multiplicarSimple = (param1: number,param2:number) : number=> param1 * param2;
console.log(multiplicarSimple(6,3));

// función de flecha para la división
const dividir = (param1: number,param2: number): number => {
    return param1 / param2;
};
console.log(dividir(6,3));
// forma simplificada de la función de flecha
const dividirSimple = (param1: number,param2: number): number => param1 / param2;
console.log(dividirSimple(6,3));