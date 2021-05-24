import { Router } from 'express';
import { PanierController } from '../controllers/PanierController';
import { catchErrors } from '../middlewares/Errors';



const apiPanierRouter = Router();

apiPanierRouter.post('/api/v1/create', catchErrors(PanierController.create));
apiPanierRouter.get('api/v1/alluser', catchErrors(PanierController.findAll));
apiPanierRouter.get('api/v1/:id', catchErrors(PanierController.findById));
apiPanierRouter.put('api/v1/updateuser/:id', catchErrors(PanierController.update));
apiPanierRouter.delete('api/v1/deleteUser/:id', catchErrors(PanierController.delete));


export {apiPanierRouter};