import { Router, Request, Response, NextFunction } from "express";
import { autorizacion } from "../configuracion/index";
import archivoController from "../controller/archivos";
import productosController from "../controller/productos";
import { Productos } from "../configuracion/estructura";


const productosRouter = Router()

productosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dataJson: [Productos] = await archivoController.readFile('productos')

        res.json({
            dataJson
        })
    } catch (error) {
        next(error)
    }
})
productosRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const idParametros: string = req.params.id
        const dataJson = await productosController.getProductoById(idParametros)

        res.json({
            dataJson
        })
    } catch (error) {
        next(error)
    }
})
productosRouter.post('/', autorizacion, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req
        if (!archivoController.validationBody(body)) {
            res.status(401).json({
                msg: 'Error en los datos Ingresados'
            })
        } else {
            await productosController.saveProductos(body)
            res.json({
                msg: 'El producto se agrego correctamente'
            })
        }
    } catch (error) {
        next(error)
    }
})

productosRouter.put('/:id', autorizacion, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const idParametros: string = req.params.id
        const { body } = req
        if (!archivoController.validationBody(body)) {
            res.status(401).json({
                msg: 'Datos invalidos'
            })
        } else {

            await productosController.upgradeProductos(idParametros, body)

            res.json({
                msg: ` El producto con id ${idParametros} se actualizó correctamente`
            })
        }
    } catch (error) {
        next(error)
    }
})
productosRouter.delete('/:id', autorizacion, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const idParametros: string = req.params.id

        await productosController.deleteProducto(idParametros)

        res.json({
            msg: `El producto con id: ${idParametros} Se eliminó correctamente `
        })
    } catch (error) {
        next(error)
    }
})

export default productosRouter