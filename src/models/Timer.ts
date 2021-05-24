import { prop, Ref } from '@typegoose/typegoose';
import { Ingredients } from './Ingredients';
import { User } from './User';

class Timer {
    @prop()
    public time?:number
    @prop({ref:()=>User})
    public userId : Ref<User>
    @prop({ref:()=>Ingredients})
    public ingredientId? : Ref<Ingredients> 
}

export {Timer};