import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
    @Prop({ required: true })
    first_name: string
    @Prop({ required: true })
    last_name: string
    @Prop({ required: true, unique: true }) //Defino las especificaciones de mi atributo
    email: string
}

//Model

export const UserSchema = SchemaFactory.createForClass(User)