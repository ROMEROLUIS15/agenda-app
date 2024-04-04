import { config } from "dotenv";
config()

export const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://lueduar15:root@agenda-app-two.6hgnlux.mongodb.net/?retryWrites=true&w=majority&appName=agenda-app-two'

export const PORT = process.env.PORT  || 8080;

export const TOKEN_SECRET = process.env.TOKEN_SECRET || "some secret key"; 