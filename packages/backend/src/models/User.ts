import { Document, model, Schema, SchemaDefinition } from "mongoose";

interface IUserSchema extends Document {
    email: string,
    username: string,
    oauth: string
}

class UserSchema {
    private _def:  SchemaDefinition
    private _schema: Schema

    constructor(){
        this._def = {
            email: {
                type: String, required: true, 
                unique: true, trim: true
            },
            username: {
                type: String, required: true,
                unique: true, trim: true
            },
            oauth: {
                type: String, required: true,
                unique: true, trim: true
            },
            ubication: {
                type: String
            }
        }
        this._schema = new Schema(this._def, {timestamps: true})
    }

    public instance(): Schema{
        return this._schema
    }
}

const schema  = new UserSchema()

export default model<IUserSchema>("User", schema.instance())