import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express';
import { Panier } from '../models/Panier';

class PanierController {

    static model = getModelForClass(Panier);
    
    static findAll= async (req:Request, res:Response) => {
       return res.json({categories:await PanierController.model.find()});
    }

    static create = async(req:Request, res:Response) => {
        return res.json(await PanierController.model.create(req.body));
    }
    static update = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await PanierController.model.updateOne({_id:id}, req.body));
    }
    static delete = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await PanierController.model.deleteOne({_id:id}));
    }
    static findById = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await PanierController.model.findOne({_id:id}));
    }
}

export {PanierController};