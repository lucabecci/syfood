import { prop, Ref } from "@typegoose/typegoose";
import Restaurant from "./Restaurant";

class User {
    @prop({required: true})
    public username!: string

    @prop({required: true})
    public email!: string

    @prop({required: true})
    public oauth_id!: string

    @prop({required: true})
    public profile_pic!: string

    @prop({required: true, default: "client"})
    public type?: string

    @prop()
    public location?: string

    @prop({default: false})
    public admin?: boolean

    @prop({ref: () => Restaurant})
    public restaurant?: Ref<Restaurant>
}

export default User