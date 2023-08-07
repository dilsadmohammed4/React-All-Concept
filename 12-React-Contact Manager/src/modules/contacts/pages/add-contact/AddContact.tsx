import NavBar from "../../../layouts/pages/navbar/NavBar";
import {Heading} from "../../../layouts/components/heading/Heading";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {IContacts} from "../../models/IContacts";
import React, {useEffect, useState} from "react";
import {IGroups} from "../../models/IGroups";
import {ContactService} from "../../services/ContactService";
import {Spinner} from "../../../layouts/components/spinner/Spinner";
import {ErrorMessage} from "../../../../layout/ErrorMessage";
import {ToastUtils} from "../../../../utils/ToastUtils";

interface IState {
    loading: boolean,
    groups: IGroups[],
    errorMessage: string
}

export const AddContact: React.FC = () => {

    const navigate = useNavigate();
    const [state, setState] = useState<IState>({
        loading: false,
        groups: [] as IGroups[],
        errorMessage: ""
    });

    const [contact, setContact] = useState<IContacts>({
        name: "",
        company: "",
        email: "",
        title: "",
        mobile: "",
        imageUrl: "",
        groupId: ""
    });

    useEffect(() => {
        setState({
            ...state,
            loading: true
        })
        ContactService.getAllGroups().then((response) => {

            setState({
                ...state,
                loading: false,
                groups: response.data
            })
        }).catch((error) => {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        });
    }, []);

    const updateInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        ContactService.createContact(contact).then((response) => {
            if (response && response.data) {
                navigate("/contacts/admin");
                ToastUtils.displaySuccessToast("Contact Created!")
            }
        }).catch((error) => {
            ToastUtils.displayErrorToast(error.message)
        });
    }

    const {loading, groups, errorMessage} = state;
    return (
        <>
            <NavBar color={'bg-dark'} heading={'Contact Manager'}/>
            <Heading color={'text-success'} heading={'Add Contacts'}/>
            {loading && <Spinner/>}
            {!loading && errorMessage.length > 0 && <ErrorMessage errorMessage={errorMessage}/>}
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <form onSubmit={e => handleSubmit(e)}>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'name'}
                                        value={contact.name}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Name" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'imageUrl'}
                                        value={contact.imageUrl}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Photo Url" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'mobile'}
                                        value={contact.mobile}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Mobile" type="number"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'email'}
                                        value={contact.email}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Email" type="email"/>
                                </div>

                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'company'}
                                        value={contact.company}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Company" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'title'}
                                        value={contact.title}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Title" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <select
                                        required={true}
                                        name={'groupId'}
                                        value={contact.groupId}
                                        onChange={e => updateInput(e)}
                                        className="form-control">
                                        <option value="">Select a Group</option>
                                        {
                                            groups.map((group, index) => {
                                                return (<>
                                                    <option key={index} value={group.id}>{group.name}</option>
                                                </>)
                                            })
                                        }


                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input className="btn btn-success me-2" type="Submit" value="Create"/>
                                    <Link className="btn btn-dark" to="/contacts/admin">Cancel</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-3">
                            {contact && contact.imageUrl &&
                                <img className="img-fluid rounded-circle shadow-lg" src={contact.imageUrl}
                                     alt="Image not found"/>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
