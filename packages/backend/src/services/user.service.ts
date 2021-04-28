import { DocumentType, getModelForClass } from "@typegoose/typegoose";
import { Model } from "mongoose";
import User from "../models/User";
import {
  SaveUserInput,
  SaveUserReturn,
  GetUserInput,
  GetUserReturn,
  GetUsersReturn,
  GetUserByOauth,
} from "../interfaces/user.interfaces";

class UserService {
  private static _user: Model<DocumentType<User>> = getModelForClass(User)

  public static async saveUser(
    input: SaveUserInput
  ): Promise<SaveUserReturn> {
    try {
      const newUser: User = await new this._user(input);
      return { success: true, user: newUser };
    } catch (e) {
      return { success: false, user: null };
    }
  }

  public static async getUserByOauth(input: GetUserByOauth): Promise<GetUserReturn> {
    try {
      const user = await this._user.findOne({oauth: input.oauth})
      return {success: true, user}
    }
    catch(e){
      return { success: false, user: null}
    }
  }

  public static async getUser(input: GetUserInput): Promise<GetUserReturn> {
    try {
      const user = await this._user.findById(input._id);
      return { success: true, user };
    } catch (e) {
      console.log(e);
      return { success: false, user: null };
    }
  }

  public static async getUsers(): Promise<GetUsersReturn> {
      try{
        const users = await this._user.find()
        return {success: true, users}
      }
      catch(e){
          console.log(e)
          return {success: false, users: null}
      }  }
}

export default UserService;
