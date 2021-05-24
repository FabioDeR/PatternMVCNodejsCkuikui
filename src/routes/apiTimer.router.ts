import { Router } from 'express';
import { TimerController } from '../controllers/TmerController';
import { catchErrors } from '../middlewares/Errors';

const apiTimerRouter = Router();

apiTimerRouter.post('/api/v1/create', catchErrors(TimerController.create));
apiTimerRouter.get('api/v1/alluser', catchErrors(TimerController.findAll));
apiTimerRouter.get('api/v1/:id', catchErrors(TimerController.findById));
apiTimerRouter.put('api/v1/updateuser/:id', catchErrors(TimerController.update));
apiTimerRouter.delete('api/v1/deleteUser/:id', catchErrors(TimerController.delete));


export {apiTimerRouter};
