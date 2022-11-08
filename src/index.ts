//Importo Librerias a utilizar
import { puerto } from './configuracion/index';
import server from './services/server'

//Escucho el puerto
server.listen(puerto, ():void =>{
    console.log(`Servidor Escuchando en el puerto ${puerto}`);
})