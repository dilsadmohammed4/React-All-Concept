import {IUser} from "../component/IUser";

export class UserService {
    public static sendUser(user: IUser) {
        console.log('......Sending from server', user)
    }
}