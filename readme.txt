// Datos para prueba en Postman de 1er Entrega

//Creo 5 carritos ------------------------------------------------------------------------------------------------------
POST 'http://localhost:8080/api/carrito'
POST 'http://localhost:8080/api/carrito'
POST 'http://localhost:8080/api/carrito'
POST 'http://localhost:8080/api/carrito'
POST 'http://localhost:8080/api/carrito'


//Creo 1 Productos------------------------------------------------------------------------------------------------------
POST 'http://localhost:8080/api/productos' \
Tipo de Archivo json
Body / raw

{
    "nombre": "Antipasto Vegetal",
    "categoria": "Conservas",
    "codigo": 5,
    "foto": "http://localhost:8080/fotos/antipasto.jpg",
    "precio": 800 ,
    "stock": 12
}


// Actualizo 1 Producto-------------------------------------------------------------------------------------------------------

PUT 'http://localhost:8080/api/productos/27f68c0f-9541-4378-8440-827a04357410' \
Tipo de Archivo json
Body / raw
{
    "nombre": "Mermelada de Ciruela",
    "categoria": "Mermeladas",
    "codigo": 1,
    "foto": "http://localhost:8080/fotos/ciruela.jpg",
    "precio": 580,
    "stock": 12
}

//Elimino 1 producto-----------------------------------------------------------------------------------------------------------

DELETE 'http://localhost:8080/api/productos/8271b2c3-44c1-44a6-a7a5-45e83bf6d14d'


// Agrego 3 producto a 1 carrito--------------------------------------------------------------------------------------------------

POST 'http://localhost:8080/api/carrito/91cbbd31-89b4-497d-801f-3e507490b4ba/productos' \
Tipo de Archivo json
Body / raw
{
	"id": "27f68c0f-9541-4378-8440-827a04357410"
}

POST 'http://localhost:8080/api/carrito/91cbbd31-89b4-497d-801f-3e507490b4ba/productos' \
Tipo de Archivo json
Body / raw
{
	"id": "2acf6f0a-046e-414e-9f3a-c815aa254365"
}

POST 'http://localhost:8080/api/carrito/91cbbd31-89b4-497d-801f-3e507490b4ba/productos' \
Tipo de Archivo json
Body / raw
{
	"id": "8271b2c3-44c1-44a6-a7a5-45e83bf6d14d"
}


// Listo los productos de los carritos---------------------------------------------------------------------------------------------

GET 'http://localhost:8080/api/carrito/91cbbd31-89b4-497d-801f-3e507490b4ba/productos'

GET 'http://localhost:8080/api/carrito/dd1e72fb-9a3a-47df-bbe8-a5d05c5803be/productos'

GET 'http://localhost:8080/api/carrito/9066e4d9-c585-4e93-bf34-df455ddb7ea4/productos'

// Elimino 1 carrito-----------------------------------------------------------------------------------------------------------------

DELETE 'http://localhost:8080/api/carrito/907e2190-57d8-408c-ade5-449190249425'


// Elimino 1 producto de 1 carrito------------------------------------------------------------------------------------------------

DELETE 'http://localhost:8080/api/carrito/91cbbd31-89b4-497d-801f-3e507490b4ba/productos/8271b2c3-44c1-44a6-a7a5-45e83bf6d14d'

