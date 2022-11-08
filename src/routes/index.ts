//importo librerias a utilizar
import { Router } from "express";
import productosRouter from "./productos";
import carritoRouter from "./carrito";

const mainRouter:Router = Router()

mainRouter.use('/productos', productosRouter)
mainRouter.use('/carrito', carritoRouter)


export default mainRouter;