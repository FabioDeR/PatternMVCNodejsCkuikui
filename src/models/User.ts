import {plugin, prop} from '@typegoose/typegoose';
import passportLocal from 'passport-local-mongoose';

@plugin(passportLocal, {
    usernameField:'email'
})

//Entity User
class User{
   @prop({required:true, unique:true})
   public pseudo? : string;
   @prop({required:true, unique: true})
   public email?:string;
}

export {User};