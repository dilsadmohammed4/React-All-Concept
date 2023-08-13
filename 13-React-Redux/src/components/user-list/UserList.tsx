import React, {useEffect, useState} from "react";
import {RootState, useAppDispatch} from "../../redux/store";
import * as userReducer from "../../redux/users/user.slice"
import * as userActions from "../../redux/users/user.actions"
import {useSelector} from "react-redux";

export const UserList: React.FC = () => {

    const dispatch = useAppDispatch();

    const userState: userReducer.IniatialState = useSelector((store: RootState) => {
        return store[userReducer.userFeature];
    })
    useEffect(() => {
        dispatch(userActions.getAllUsersAction())
    }, []);
    let {loading, users, errorMessage} = userState;
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">User List</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eum minus recusandae
                            voluptate. Animi assumenda consequatur deserunt dignissimos eaque expedita natus omnis
                            quaerat? A culpa ea expedita illum possimus quo.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            loading && <h2 className="fw-bold">...Loading</h2>
                        }
                        {
                            !loading && Object.keys(errorMessage).length > 0 &&
                            <h3 className="text-danger">{JSON.stringify(errorMessage)}</h3>
                        }
                        {
                            !loading && users.length > 0 &&
                            <table className="table table-hover table-sthiped">
                                <thead className="bg-primary text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Website</th>
                                    <th>Company</th>
                                    <th>Location</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    users.map(user => {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.website}</td>
                                                <td>{user.company.name}</td>
                                                <td>{user.address.city}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
