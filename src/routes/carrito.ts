//Importo Librerias a utilizar
import { Router, Request, Response, NextFunction } from "express";
import carritoController from "../controller/carrito";

const carritoRouter = Router();

carritoRouter.post("/",async (req: Request, res: Response, next: NextFunction) => {
        try {
            const idCarrito = await carritoController.creaCarrito();
            res.json({
                msg: `Se creo el carrito: ${idCarrito}`,
            });
        } catch (error) {
            next(error);
        }
    }
);
carritoRouter.delete("/:id",async (req: Request, res: Response, next: NextFunction) => {
        try {
            const idParametros: string = req.params.id;

            await carritoController.deleteCarrito(idParametros);

            res.json({
                msg: `El elemento con Id: ${idParametros} se a eliminado correctamente`,
            });
        } catch (error) {
            next(error);
        }
    }
);
carritoRouter.get("/:id/productos",async (req: Request, res: Response, next: NextFunction) => {
        try {
            const idParametros = req.params.id;
            const dataJson = await carritoController.productosById(idParametros);

            res.json({
                dataJson,
            });
        } catch (error) {
            next(error);
        }
    }
);
carritoRouter.post("/:id/productos",async (req: Request, res: Response, next: NextFunction) => {
        try {
            const idParametros = req.params.id;
            const { id } = req.body;
            await carritoController.addProductos(idParametros, id);

            res.json({
                msg: `El producto con id:${id} se ha agregado correctamente al carrito con id: ${idParametros}`,
            });
        } catch (error) {
            next(error);
        }
    }
);
carritoRouter.delete("/:id/productos/:id_prod", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const idCarrito = req.params.id;
        const idProducto = req.params.id_prod;

        await carritoController.deleteProductodelCarrito(idCarrito, idProducto);

        res.json({
            msg: `El producto con id: ${idProducto}, fue eliminado del carrito: ${idCarrito}`,
        });
    } catch (error) {
        next(error);
    }
}
);
export default carritoRouter;