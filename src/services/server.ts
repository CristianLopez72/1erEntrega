//Importo Librerias a utilizar
import express,{Request,Response, NextFunction} from 'express';
import mainRouter from '../routes/index';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', mainRouter)

app.use((req, res, next) => {
    res.status(404).json({
        msg:'Página no encontrada en el Servidor'
    })
})

interface Error {
    status?: number,
    message?: string
}

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Error interno del Servidor';

    res.status(status).json({
        message,
    })
});


export default app;