import { prop, Ref } from '@typegoose/typegoose';
import { Cuisson } from './Cuisson';

class Ingredients{
    @prop({required:true, unique:true})
    public name? : string;
    @prop({required:true})
    public image? : string;
    @prop()
    public description?:string
    @prop()
    public poid?: number
    @prop({ref:() => Cuisson})
    public cuissonId?:Ref<Cuisson>   
    
}

export {Ingredients};