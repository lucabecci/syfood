import { model, Schema, SchemaDefinition } from "mongoose";
import Location from "./Location";

class RestaurantScheme {
    private _def: SchemaDefinition
    private _schema: Schema

    constructor(){
        this._def = {
            Name: {
                type: String,
                maxlength: 20,
                trim: true,
                required: true,
                minlength: 2
            },
            Description: {
                type: String,
                maxlength: 50,
                required: true,
                minlength: 15
            },
            ProfilePic: {
                type: String,
                required: true,
                default: "default.png"
            },
            Rated: {
                type: Number,
                default: 3
            },
            ResLocation: Location
        }
        this._schema = new Schema(this._def, {timestamps: true})
    }

    public instance(): Schema {
        return this._schema
    }
}
const schema = new RestaurantScheme

export default model("Restaurant", schema.instance())