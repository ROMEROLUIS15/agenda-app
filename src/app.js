import express from 'express'; //importar sin require: colocar "type": "module" en package.json bajo "main": "index.js"
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import taskRouter from './routes/tasks.routes.js'


const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // permite que se comuniquen los localhost
     credentials: true 
}))
app.use(morgan('dev')); // paquete que nos permite ver peticiones que llegan
app.use(express.json()) //recibe json desde el backend y no deja llegar undefined
app.use(cookieParser())

app.use('/api', authRoutes) //'/api': nos conecta con el frontend (prefijo)
app.use('/api', taskRouter)
export default app;
