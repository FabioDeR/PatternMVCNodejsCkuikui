import { prop } from '@typegoose/typegoose';

class Cuisson{
    @prop({require:true})
    public type?:string
}

export {Cuisson};