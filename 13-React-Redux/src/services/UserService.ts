import axios, {AxiosResponse} from "axios";

export class UserService {

    private static serverUrl: string = "https://jsonplaceholder.typicode.com/users";

    public static getAllUsers(): Promise<any> {
        return axios.get(this.serverUrl)
    }
}