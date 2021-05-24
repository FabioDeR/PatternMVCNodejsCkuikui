import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express';
import { Ingredients } from '../models/Ingredients';


class IngredientController {

    static model = getModelForClass(Ingredients);

    static findAll= async (req:Request, res:Response) => {
       return res.json({categories:await IngredientController.model.find()});
    }

    static create = async(req:Request, res:Response) => {
        return res.json(await IngredientController.model.create(req.body));
    }
    static update = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await IngredientController.model.updateOne({_id:id}, req.body));
    }
    static delete = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await IngredientController.model.deleteOne({_id:id}));
    }
    static findById = async(req:Request, res:Response) => {
        const {id} = req.params;
        return res.json(await IngredientController.model.findOne({_id:id}));
    }
}

export {IngredientController};