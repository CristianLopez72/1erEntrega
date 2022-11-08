export interface Productos{
    id:string|undefined,
    timestamp: string|undefined,
    nombre: string|undefined,
    categoria:string|undefined,
    codigo: number|undefined,
    foto: string|undefined,
    precio: number|undefined,
    stock:number|undefined
}

export interface Carrito{
    id:string,
    timestap:string,
    productos:[Productos]
}
