import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express';
import { Timer } from '../models/Timer';


class TimerController {
   
    static model = getModelForClass(Timer);
    static findAll= async (req:Request, res:Response) => {
       return res.json({timers:await TimerController.model.find()});
    }

    static create = async(req:Request, res:Response) => {
        return res.json(await TimerController.model.create(req.body));
    }
    static update = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await TimerController.model.updateOne({_id:id}, req.body));
    }
    static delete = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await TimerController.model.deleteOne({_id:id}));
    }
    static findById = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await TimerController.model.findOne({_id:id}));
    }
}

export {TimerController};