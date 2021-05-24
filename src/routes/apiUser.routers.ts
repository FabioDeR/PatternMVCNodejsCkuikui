import {Router} from 'express';
import { UserController } from '../controllers/UserController';
import { catchErrors } from '../middlewares/Errors';


const apiUserRouter = Router();

apiUserRouter.post('/api/v1/create', catchErrors(UserController.create));
apiUserRouter.get('api/v1/alluser', catchErrors(UserController.findall));
apiUserRouter.get('api/v1/:id', catchErrors(UserController.findById));
apiUserRouter.put('api/v1/updateuser/:id', catchErrors(UserController.updateById));
apiUserRouter.delete('api/v1/deleteUser/:id', catchErrors(UserController.delete));


export {apiUserRouter};
