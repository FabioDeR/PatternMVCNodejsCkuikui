import { prop, Ref } from '@typegoose/typegoose';
import { Ingredients } from './Ingredients';
import { User } from './User';

class Panier {
    @prop({require:true })
    public title? : string;
    @prop({ref:()=>User})
    public userId : Ref<User>
    @prop({ref:()=>Ingredients})
    public ingredientId? : Ref<Ingredients>[]
}

export {Panier};