import { Router } from 'express';
import { IngredientController } from '../controllers/IngredientController';
import { catchErrors } from '../middlewares/Errors';



const apiIngredientRouter = Router();

apiIngredientRouter.post('/api/v1/create', catchErrors(IngredientController.create));
apiIngredientRouter.get('api/v1/alluser', catchErrors(IngredientController.findAll));
apiIngredientRouter.get('api/v1/:id', catchErrors(IngredientController.findById));
apiIngredientRouter.put('api/v1/updateuser/:id', catchErrors(IngredientController.update));
apiIngredientRouter.delete('api/v1/deleteUser/:id', catchErrors(IngredientController.delete));


export {apiIngredientRouter};