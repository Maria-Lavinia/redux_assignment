import axios from "axios";
import { Platform } from "react-native";
import { UserEntity } from "./userEntity";

export class UsersAPI {
    static baseUrl: string = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

    static async signUp(user: UserEntity) {
        try {
            const result = await axios.post("http://" + this.baseUrl + ':3003/auth/signup', user);
            return result.data;
        }
        catch(error) {
        }
    }
}