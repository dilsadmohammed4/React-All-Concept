import React, {useState} from "react";
import {UserService} from "../services/UserService";
import {IUser} from "../models/IUser";

interface IProps {
    receiveUser: (user: IUser) => void
}

export const UserList: React.FC<IProps> = (props) => {
    const [users, setUsers] = useState<IUser[]>(UserService.getAllUsers());
    const clickUserRow = (user: IUser) => {
        props.receiveUser(user);
    }
    return (
        <>
            <div className="table table-hover table-striped text-center">
                <thead>
                <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Location</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.length > 0 && users.map((user, index) => {
                        return (<>
                            <tr key={index} onClick={() => clickUserRow(user)}>
                                <td>{index + 1}</td>
                                <td>{user.name.first} {user.name.last}</td>
                                <td>{user.dob.age}</td>
                                <td>{user.email}</td>
                                <td>{user.location.city}</td>
                            </tr>
                        </>)
                    })
                }
                </tbody>
            </div>
        </>
    );
};
