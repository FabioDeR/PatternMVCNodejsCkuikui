import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express';
import { Recette } from '../models/Recette';

class RecetteController {

    static model = getModelForClass(Recette);
    
    static findAll= async (req:Request, res:Response) => {
       return res.json({categories:await RecetteController.model.find()});
    }

    static create = async(req:Request, res:Response) => {
        return res.json(await RecetteController.model.create(req.body));
    }
    static update = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await RecetteController.model.updateOne({_id:id}, req.body));
    }
    static delete = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await RecetteController.model.deleteOne({_id:id}));
    }
    static findById = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await RecetteController.model.findOne({_id:id}));
    }
}

export {RecetteController};