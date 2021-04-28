import { getModelForClass } from "@typegoose/typegoose"
import passport, { Profile } from "passport"
import { Strategy, StrategyOptions } from "passport-google-oauth20"
import config from "src/config/config"
import User from "src/models/User"

class GoogleStrategy {
    private static user = getModelForClass(User)

    private static GoogleOptions: StrategyOptions = {
        clientID: config.GOOGLE.CLIENT_ID,
        clientSecret: config.GOOGLE.CLIENT_SECRET,
        callbackURL: config.GOOGLE.CALLBACK_URL
    }

    public static async Setup(): Promise<void> {
        passport.serializeUser(function(user, done){
            done(null, user)
        })

        passport.deserializeUser(function(user: any, done){
            done(null, user)
        })

        passport.use( new Strategy(
                this.GoogleOptions,
                async (
                    _accessToken,
                    _refreshToken,
                    profile: Profile,
                    done: any
                ) => {
                    const user = {
                        username: profile.displayName.replace(/\s/g, ""),
                        email: profile.emails?.[0].value,
                        oauth: profile.id,
                        profile_pic: profile.photos![0]
                    }

                    const exists = await this.user.findOne({
                        email: user.email
                    })

                    if(exists){
                        return done(null, user)
                    }

                    await this.user.create(user)

                    return done(null, user)
                }
            ))
    }

}

export default GoogleStrategy