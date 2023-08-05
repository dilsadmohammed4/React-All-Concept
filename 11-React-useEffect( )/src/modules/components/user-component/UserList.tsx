import {IUsers} from "../../models/IUsers";
import React, {useEffect, useState} from "react";
import {UserService} from "../../services/UserService";
import {ErrorMessage} from "../../../layout/ErrorMessage";
import {UserTable} from "./UserTable";
import {DisplayHeading} from "../../../layout/DisplayHeading";
import {Spinner} from "../../../layout/Spinner";

export const UserList: React.FC = () => {

    const [state, setState] = useState({
        loading: false,
        users: [] as IUsers[],
        errorMessage: ""

    });

    useEffect(() => {
        setState({
            ...state,
            loading: true
        })
        UserService.getAllUsers().then((response => {
            setState({
                ...state,
                loading: false,
                users: response.data
            })
        })).catch((error) => {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message,
            });
        })
    }, []);

    const onClickFn = (user: IUsers) => {
        alert(JSON.stringify(user));
    }

    const {loading, users, errorMessage} = state;

    return (
        <>
            <DisplayHeading heading={'User List'}/>
            {loading && <Spinner/>}

            {
                users.length > 0 && <UserTable users={users} onClickFn={onClickFn}/>
            }

            {
                errorMessage.length > 0 && <ErrorMessage errorMessage={errorMessage}/>
            }
        </>
    );
};
