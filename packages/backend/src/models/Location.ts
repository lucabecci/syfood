import { model, Schema, SchemaDefinition } from "mongoose";
import Restaurant from "./Restaurant";

class LocationSchema {
    private _def: SchemaDefinition
    private _schema: Schema

    constructor(){
        this._def = {
            Zone: {
                type: String,
                required: true,
                minlength: 3,
                maxlength: 25
            },
            State: {
                type: String,
                required: true,
                minlength: 3,
                maxlength: 25
            },
            Province: {
                type: String,
                required: true,
                minlength: 3,
                maxlength: 25
            },
            LocRestaurant: Restaurant
        }

        this._schema =  new Schema(this._def, {timestamps: true})
    }

    public instance(): Schema {
        return this._schema
    }
}

const schema = new LocationSchema 

export default model("Location", schema.instance())