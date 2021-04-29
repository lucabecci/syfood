import { prop } from "@typegoose/typegoose";

class Recipes {
    @prop({required: true})
    public name!: string

    @prop({required: true})
    public description!: string

    @prop({required: true, type: () => [String], max: 5})
    public ingredients!: string[]
}

export default Recipes 