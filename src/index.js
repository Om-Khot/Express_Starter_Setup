import express from 'express';
import {PORT} from './config/serverConfig.js'
import connectDB from './config/mongodbConfig.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, async()=>{
    console.log(`Server has been started on ${PORT}`);
    await connectDB();    
});