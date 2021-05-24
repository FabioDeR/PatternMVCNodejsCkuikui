import { prop, Ref } from '@typegoose/typegoose';
import { Ingredients } from './Ingredients';
import { User } from './User';

class Recette {
    @prop({require:true})
    public name?:string
    @prop()
    public image?:string
    @prop({require: true})
    public description?: string
    @prop({ref:()=>Ingredients})
    public ingredientId?: Ref<Ingredients>[]
    @prop({ref:()=>User})
    public userId : Ref<User>
}

export {Recette};