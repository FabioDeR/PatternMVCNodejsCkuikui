import express, { Request, Response } from 'express';
import { ErrorsMiddlewars } from './middlewares/Errors';
import { PassportConfig } from './middlewares/Passport';
import { apiUserRouter } from './routes/apiUser.routers';



const app = express();

//PASSPORT CONFIGURATION
app.use(PassportConfig.configure);
app.use(apiUserRouter);


app.use(ErrorsMiddlewars.notFound);

//TEST 
app.get('/', (req : Request, res : Response) =>{
    res.send('IsOkay');
});


export {app};