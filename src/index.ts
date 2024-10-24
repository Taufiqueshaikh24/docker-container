import express, { Request, Response, NextFunction } from 'express';
import connectDB from './lib/db';

const app = express();
const port= process.env.PORT || 4000; 

// database connection 
connectDB();


app.get('/', (req:Request , res:Response) => {
    res.send('Hello typescript from Docker Container!!!')
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
