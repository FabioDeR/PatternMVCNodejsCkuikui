import { Router } from 'express';
import { RecetteController } from '../controllers/RecetteController';
import { catchErrors } from '../middlewares/Errors';


const apiRecetteRouter = Router();

apiRecetteRouter.post('/api/v1/create', catchErrors(RecetteController.create));
apiRecetteRouter.get('api/v1/alluser', catchErrors(RecetteController.findAll));
apiRecetteRouter.get('api/v1/:id', catchErrors(RecetteController.findById));
apiRecetteRouter.put('api/v1/updateuser/:id', catchErrors(RecetteController.update));
apiRecetteRouter.delete('api/v1/deleteUser/:id', catchErrors(RecetteController.delete));


export {apiRecetteRouter};