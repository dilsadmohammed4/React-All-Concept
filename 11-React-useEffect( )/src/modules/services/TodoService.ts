import axios, {AxiosResponse} from "axios";

export class TodoService {

    private static serverUrl: string = "https://jsonplaceholder.typicode.com";

    public static getAllTodos(): Promise<any> {
        return axios.get(`${this.serverUrl}/todos`)
    }
}