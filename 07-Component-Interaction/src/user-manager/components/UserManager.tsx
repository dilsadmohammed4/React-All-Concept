import {UserList} from "./UserList";
import {UserCard} from "./UserCard";
import {useState} from "react";
import {IUser} from "../models/IUser";

export const UserManager = () => {
    const [user, setUser] = useState<IUser>({} as IUser);
    const receiveUser = (user: IUser): void => {
        setUser(user);
    }
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">User Manager</p>
                        <div className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consequuntur doloribus et facilis sit. Accusantium, ad aliquam, aut culpa expedita fuga nam
                            nulla odio perferendis, suscipit voluptas voluptatem. Ipsa praesentium, rerum.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-9">
                        <UserList receiveUser={receiveUser}/>
                    </div>
                    <div className="col-sm-3">
                        <UserCard user={user}/>
                    </div>
                </div>
            </div>
        </>
    );
};
