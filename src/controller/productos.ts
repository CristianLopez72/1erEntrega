import archivoController from "./archivos";
import {Productos} from '../configuracion/estructura';
import {v4 as uuidv4} from 'uuid';

class claseProductos {
    constructor(){
    }
    async getProductoById (id:string){
        try{
            const dataJson:[] = await archivoController.readFile('productos')
            const index:number = dataJson.findIndex((itemId:Productos) => itemId.id === id)
    
            if(index < 0){
                throw 'El producto buscado no existe'
            }
    
            return dataJson[index]
        }catch(error){
            console.log(error);
        }
    } 
    async saveProductos(data:Productos){
        try{
            const dataJson:[Productos] = await archivoController.readFile('productos');
            const newProduct:Productos = {
                id:uuidv4(),
                timestamp: new Date().toLocaleString(),
                nombre: data.nombre,
                categoria:data.categoria,
                codigo: data.codigo,
                foto: data.foto,
                precio: data.precio,
                stock: data.stock
            }
    
            dataJson.push(newProduct)
    
            await archivoController.saveFile(dataJson,'productos')
        }catch(error){
            console.log(error);
        }
    }
    async deleteProducto(id:string){
        try{
            const dataJson:[Productos] = await archivoController.readFile('productos')
            const index:number = dataJson.findIndex((itemId:Productos) => itemId.id === id)
            if(index < 0){
                throw 'El producto no existe'
            }
            dataJson.splice(index,1)
            await archivoController.saveFile(dataJson,'productos')
    
        }catch(error){
            console.log(error);
            
        }
    }
    async upgradeProductos(id:string,data:Productos){
        const dataJson:[Productos] = await archivoController.readFile('productos')
        const index:number = dataJson.findIndex((itemId:Productos) => itemId.id === id)
        if(index < 0){
                throw 'El producto no existe'
        }

        dataJson[index] = {
            id,
            timestamp: new Date().toLocaleString(),
            nombre: data.nombre,
            categoria: data.categoria,
            codigo: data.codigo,
            foto: data.foto,
            precio: data.precio,
            stock: data.stock
        }
        await archivoController.saveFile(dataJson,'productos')
    }
}

const productosController = new claseProductos()

export default productosController