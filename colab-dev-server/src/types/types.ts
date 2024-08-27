export type text = string;
export type numeric = number;
export type bool1 = false;
export type bool2 = true;
export type list = [] // tipagem de arrays --> ou somente o [] ou itemLista[]
export type listAlternative = Array<numeric> // array que no generics recebe dataType number
export type myObj = {}

// tipagem dinamica --> INFERENCIA DE TIPOS

let x = [0, 1, null];
//o anterior equivale a let x: (number | null)[]
//m TypeScript, existem vários locais onde a inferência de tipos é usada para prover informação quando não se tem um tipo explícito de anotação.
//Quando uma inferência de tipo é composta por várias expressões, o tipo dessas expressões é usada para calcular o “melhor tipo comum”. Por exemplo: