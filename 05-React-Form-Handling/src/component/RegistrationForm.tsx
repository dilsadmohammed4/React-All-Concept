import "./RegistrationForm.css";
import React, {useState} from "react";
import {IUser} from "./IUser";
import {UserService} from "../services/UserService";


export const RegistrationForm = () => {
    const [user, setUser] = useState<IUser>({
        fName: "",
        lName: "",
        gender: "",
        email: "",
        phone: "",
        course: ""
    });

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        UserService.sendUser(user);
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration">
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                <form onSubmit={event => handleSubmit(event)}>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <input type="text" id="firstName"
                                                       value={user.fName}
                                                       name={'fName'}
                                                       onChange={event => onInputChange(event)}
                                                       className="form-control form-control-lg"/>
                                                <label className="form-label" htmlFor="firstName">First Name</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <input type="text" id="lastName"
                                                       value={user.lName}
                                                       name={'lName'}
                                                       onChange={event => onInputChange(event)}
                                                       className="form-control form-control-lg"/>
                                                <label className="form-label" htmlFor="lastName">Last Name</label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col-md-6 mb-4">

                                            <h6 className="mb-2 pb-1">Gender: </h6>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio"
                                                       name={'gender'}
                                                       value={'Female'}
                                                       onChange={event => onInputChange(event)}
                                                       id="femaleGender"/>
                                                <label className="form-check-label"
                                                       htmlFor="femaleGender">Female</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio"
                                                       name={'gender'}
                                                       value={'Male'}
                                                       onChange={event => onInputChange(event)}
                                                       id="maleGender"/>
                                                <label className="form-check-label"
                                                       htmlFor="maleGender">Male</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="email" id="emailAddress"
                                                       name={'email'}
                                                       value={user.email}
                                                       onChange={event => onInputChange(event)}
                                                       className="form-control form-control-lg"/>
                                                <label className="form-label" htmlFor="emailAddress">Email</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="text" id="phoneNumber"
                                                       value={user.phone}
                                                       name={'phone'}
                                                       onChange={event => onInputChange(event)}
                                                       className="form-control form-control-lg"/>
                                                <label className="form-label" htmlFor="phoneNumber">Phone
                                                    Number</label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">

                                            <select className="select form-control-lg"
                                                    value={user.course}
                                                    name={'course'}
                                                    onChange={event => onInputChange(event)}>
                                                <option value="">Choose option</option>
                                                <option value="Bsc.">Bsc.</option>
                                                <option value="B Tech.">B Tech.</option>
                                                <option value="MCA">MCA</option>
                                            </select>

                                        </div>
                                    </div>

                                    <div className="mt-4 pt-2">
                                        <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
