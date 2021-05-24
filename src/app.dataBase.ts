import {connect} from 'mongoose';

class DataBaseConnector{
    static async initDatabase(){
        try {
            return await connect(process.env.DB_URI || 'mongodb://127.0.0.1:27017/Ckuikui_db', {
                useCreateIndex:true,
                useFindAndModify:true,
                useNewUrlParser:true,
                useUnifiedTopology:true
            });
        } catch (error) {
            return false;
        }
    }
}

export {DataBaseConnector};