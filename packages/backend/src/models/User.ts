import { prop } from "@typegoose/typegoose";

class User {
    @prop({required: true})
    public username!: string

    @prop({required: true})
    public email: string

    @prop({required: true})
    public oauth_id: string

    // @prop({ref: () => any})
    // public favorites: Ref<[]>

    // @prop({ref: () => Location})
    // public location: Ref<Location>

}

export default User