import { prop, Ref } from "@typegoose/typegoose";
import User from "./User";


class Restaurant {
    @prop({required: true, minlength: 1, maxlength: 20})
    public name!: string

    @prop({required: true, maxlength: 50, minlength: 20})
    public description!: string 

    @prop({default: "profile-restaurant.jpg"})
    public profile_pic?: string

    @prop({required: true})
    public location!: string

    @prop({type: () => [String]})
    public likes?: string[]

    @prop({required: true, ref: () => User})
    public owner!: Ref<User>
}

export default Restaurant
