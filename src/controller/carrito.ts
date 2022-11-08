//Importo Librerias a utilizar
import { v4 as uuidv4 } from "uuid";
import { Carrito, Productos } from "../configuracion/estructura";
import archivoController from "./archivos";

class claseCarrito {
  constructor() {}

  async creaCarrito() {
    try {
      const dataJson: [Carrito] = await archivoController.readFile("carrito");
      const nuevoCarrito: Carrito = {
        id: uuidv4(),
        timestap: new Date().toLocaleString(),
        productos: [
          {
            id: undefined,
            timestamp: undefined,
            nombre: undefined,
            categoria: undefined,
            codigo: undefined,
            foto: undefined,
            precio: undefined,
            stock: undefined,
          },
        ],
      };
      dataJson.push(nuevoCarrito);

      await archivoController.saveFile(dataJson, "carrito");

      return nuevoCarrito.id;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteCarrito(id: string) {
    try {
      const dataJson: [Carrito] = await archivoController.readFile("carrito");
      const index: number = dataJson.findIndex(
        (itemId: Carrito) => itemId.id === id
      );
      if (index < 0) {
        throw "El producto a borrar no existe";
      }
      dataJson.splice(index, 1);

      await archivoController.saveFile(dataJson, "carrito");
    } catch (error) {
      console.log(error);
    }
  }
  async productosById(id: string) {
    try{
      const dataJson: [Carrito] = await archivoController.readFile("carrito");
      const index: number = dataJson.findIndex(
        (itemId: Carrito) => itemId.id === id
      );
      if (index < 0) {
        throw "El producto buscado no existe";
      }
      return dataJson[index].productos;
    }catch(error){
      console.log(error)
    }
  }
  async addProductos(idCarrito: string, idProductos:string) {
    try{
        const dataJsonCarrito: [Carrito] = await archivoController.readFile("carrito");
        const dataJsonProductos: [Productos] = await archivoController.readFile('productos')
        

        const indexCarrito: number = dataJsonCarrito.findIndex(
          (itemId: Carrito) => itemId.id === idCarrito
        );
        const indexProductos: number = dataJsonProductos.findIndex(
            (itemId: Productos) => itemId.id === idProductos
        )
        if (indexCarrito < 0) {
          throw "El carrito no existe";
        }
        if (indexProductos < 0) {
          throw "El producto no existe";
        }
        
        dataJsonCarrito[indexCarrito].productos.push(dataJsonProductos[indexProductos])
    
        await archivoController.saveFile(dataJsonCarrito,'carrito') 

    }catch(error){
        console.log(error);
        
    }

  }
  async deleteProductodelCarrito(idCarrito:string, idProductos:string){
    try{
      const dataJsonCarrito: [Carrito] = await archivoController.readFile("carrito");
      const indexCarrito: number = dataJsonCarrito.findIndex(
          (itemId: Carrito) => itemId.id === idCarrito
        );
        if (indexCarrito < 0) {
            throw "El carrito a borrar no existe";
          }
          const indexProductos: number = dataJsonCarrito[indexCarrito].productos.findIndex(
              (itemId: Productos) => itemId.id === idProductos
          )
        if (indexProductos < 0) {
          throw "El producto a borrar no existe";
        }
        dataJsonCarrito[indexCarrito].productos.splice(indexProductos,1)
        await archivoController.saveFile(dataJsonCarrito,'carrito')
    }catch(error){
      console.log(error)
    }

  }
}

const carritoController = new claseCarrito()

export default carritoController