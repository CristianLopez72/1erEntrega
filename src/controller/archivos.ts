import path from "path";
import fs from 'fs'
import {Productos,Carrito} from '../configuracion/estructura'


class claseArchivo {
    constructor (){
    }

    async readFile(pathFile:string){
        try{
            const filePath:string = path.resolve(__dirname,`../../${pathFile}.json`)
            const fileData = await fs.promises.readFile(filePath, "utf-8");
            const dataJson = JSON.parse(fileData);
            return dataJson;
        }catch(error){
            console.log(error)
        }
    }
    async saveFile(dataObj: [Productos]|[Carrito], pathFile:string){
        try{
            const filePath = path.resolve(__dirname,`../../${pathFile}.json`)
            const data = JSON.stringify(dataObj, null, "\t");
            await fs.promises.writeFile(filePath, data);
        }catch(error){
            console.log(error)
        }
    }

    validationBody(body:Productos){
        if(
            !body.nombre ||
            !body.codigo || typeof body.codigo !== 'number' ||
            !body.precio || typeof body.precio !== 'number' ||
            !body.stock || typeof body.stock !== 'number'

        ){
            return false
        }else{
            return true
        }
    }
}

const archivoController = new claseArchivo()

export default archivoController