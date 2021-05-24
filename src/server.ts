import {config} from 'dotenv';
import { app } from './app.bootstrap';
import { DataBaseConnector } from './app.dataBase';

config({path : 'variables.env'});


const init = async () => {
    const db = await DataBaseConnector.initDatabase();

    if(db){
        app.listen(process.env.PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`The Server running on : http://localhost:${process.env.PORT}`);        
        });
    }
    else {
        console.log('There was a error in the database connection');        
    }
    
};

init();