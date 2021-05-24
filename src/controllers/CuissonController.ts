import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express';
import { Cuisson } from '../models/Cuisson';

class CuissonController {

    static model = getModelForClass(Cuisson);
    
    static findAll= async (req:Request, res:Response) => {
       return res.json({categories:await CuissonController.model.find()});
    }

    static create = async(req:Request, res:Response) => {
        return res.json(await CuissonController.model.create(req.body));
    }
    static update = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await CuissonController.model.updateOne({_id:id}, req.body));
    }
    static delete = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await CuissonController.model.deleteOne({_id:id}));
    }
    static findById = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await CuissonController.model.findOne({_id:id}));
    }
}

export {CuissonController};