import { getModelForClass } from '@typegoose/typegoose';
import { Request, Response } from 'express';
import { User } from '../models/User';

class UserController{
    static model = getModelForClass(User)

    //Create
    static create = async (req:Request, res : Response) =>{
        return res.json({user : await UserController.model.register(req.body, req.body.password)});
    }
    //GetAll
    static findall = async (req:Request, res: Response)=>{
        return res.json({users : await UserController.model.find({})});
    }
    //findById
    static findById = async (req :Request, res: Response)=>{
        const {id} = req.params;
        return res.json({userId : await UserController.model.findOne({_id : id})});
    }
    //updateById
    static updateById = async(req:Request, res:Response) =>{
        const {id} = req.params;
        return res.json(await UserController.model.updateOne({_id : id}, req.body));
    }
    //Delete
    static delete = async(req:Request, res:Response) =>{
        const {id} = req.params;
        return res.json(await UserController.model.deleteOne({_id : id}));
    }

}

export {UserController};