import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import * as userReducer from "../../../../redux/users/users.slice";
import {TokenUtil} from "../../../../utils/TokenUtil";

export const Home: React.FC = () => {

    const userState = useSelector((state: RootState) => {
        return state[userReducer.userFeatureKey];
    });

    const {isAuthenticated} = userState;

    return (
        <>
            <div className="landing">
                <div className="wrapper">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                        <h1 className="display-1">Contact Manager App</h1>
                        <div>
                            {
                                isAuthenticated && TokenUtil.isLoggedIn() ?
                                    <Link to={'/contacts/admin'}>
                                        <button className="btn btn-dark">View Contacts</button>
                                    </Link>
                                    :
                                    <Link to={'/users/login'}>
                                        <button className="btn btn-dark ms-2">Login</button>
                                    </Link>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
