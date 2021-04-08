import {
  SaveUserInput,
  SaveUserReturn,
  GetUserInput,
  GetUserReturn,
  GetUsersReturn,
} from "../interfaces/user.interfaces";
import User, { IUserSchema } from "../models/User";

class UserService {
  protected static async saveUser(
    input: SaveUserInput
  ): Promise<SaveUserReturn> {
    try {
      const newUser: IUserSchema = await new User(input);
      return { success: true, user: newUser };
    } catch (e) {
      return { success: false, user: null };
    }
  }

  protected static async getUser(input: GetUserInput): Promise<GetUserReturn> {
    try {
      const user = await User.findById(input._id);
      return { success: true, user };
    } catch (e) {
      console.log(e);
      return { success: false, user: null };
    }
  }

  protected static async getUsers(): Promise<GetUsersReturn> {
      try{
        const users = await User.find()
        return {success: true, users}
      }
      catch(e){
          console.log(e)
          return {success: false, users: null}
      }
  }
}

export default UserService;
