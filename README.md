# Notas del curso

Instalar las dependencias con versiones del curso:
```bash
npm install dotenv@8.2.0 express@4.17.1 mongoose@5.11.13
```

# Correr el servidor
```bash
node servidor/index.js --watch
```


## Crear y configurar una base de datos en Mongo DB
### Add IP Access List Entry
1. Ingresar con su cuenta a MongoDB Atlas (cloud.mongodb.com). Luego ingresar a la siguiente dirección: `[Network Access] > [IP Access List] > [+ADD IP ADDRESS]`, y configurar lo siguiente:
- **Access List Entry:** 0.0.0.0/0
- **Comment**: develop
2. Abrir el cliente de escritorio (MongoDF Compass), ingresar su `connection string`, y luego en el botón `[Create database]`
- **Database Name**: meanproductos
- **Collection Name**: producto

---


