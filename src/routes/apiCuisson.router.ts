import { Router } from 'express';
import { CuissonController } from '../controllers/CuissonController';
import { catchErrors } from '../middlewares/Errors';



const apiCuissonRouter = Router();

apiCuissonRouter.post('/api/v1/create', catchErrors(CuissonController.create));
apiCuissonRouter.get('api/v1/alluser', catchErrors(CuissonController.findAll));
apiCuissonRouter.get('api/v1/:id', catchErrors(CuissonController.findById));
apiCuissonRouter.put('api/v1/updateuser/:id', catchErrors(CuissonController.update));
apiCuissonRouter.delete('api/v1/deleteUser/:id', catchErrors(CuissonController.delete));


export {apiCuissonRouter};