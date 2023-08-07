import NavBar from "../../../layouts/pages/navbar/NavBar";
import {Heading} from "../../../layouts/components/heading/Heading";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {IContacts} from "../../models/IContacts";
import {ContactService} from "../../services/ContactService";
import {Spinner} from "../../../layouts/components/spinner/Spinner";
import {ErrorMessage} from "../../../../layout/ErrorMessage";
import {ContactCard} from "./ContactCard";
import {ToastUtils} from "../../../../utils/ToastUtils";

interface IProps {
    loading: boolean,
    contacts: IContacts[],
    filteredContact: IContacts[]
    errorMessage: string
}

export const AdminContact: React.FC = () => {
    const [state, setState] = useState({
        loading: false,
        contacts: [] as IContacts[],
        filteredContact: [] as IContacts[],
        errorMessage: ""

    });

    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        getAllContactFromServer();
    }, []);

    const getAllContactFromServer = () => {
        setState({
            ...state,
            loading: true
        })
        ContactService.getAllContacts().then((response => {
            setState({
                ...state,
                loading: false,
                contacts: response.data,
                filteredContact: response.data
            })
        })).catch((error) => {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message,
            });
        })
    }
    const clickDeleteContact = (contactId: string | undefined) => {

        if (contactId) {
            ContactService.deleteContact(contactId).then((response) => {

                if (response.data) {
                    getAllContactFromServer();
                    ToastUtils.displayWarningToast("Contact Deleted!")
                }
            }).catch((error) => {
                ToastUtils.displayErrorToast(error.message)
            });
        }
    }

    const searchContact = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        if (event.target.value.trim() !== "") {
            setState({
                ...state,
                filteredContact: state.contacts.filter(contact => contact.name.toLowerCase().trim().includes(event.target.value.toLowerCase().trim()))
            })
        } else {
            setState({
                ...state,
                filteredContact: state.contacts
            })
        }
    }

    const {loading, contacts, filteredContact, errorMessage} = state;
    return (
        <>
            <NavBar color={'bg-dark'} heading={'Contact Manager'}/>
            <Heading color={'text-dark'} heading={'Manage Contacts'}/>
            {loading && <Spinner/>}

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <input
                                        value={searchQuery}
                                        onChange={e => searchContact(e)}
                                        className="form-control" placeholder="Search here" type="text"/>
                                </div>

                                <div className="col">
                                    <input className="btn btn-dark me-2" type="Submit"/>
                                    <Link className="btn btn-success" to={'/contacts/add'}><i
                                        className="bi bi-plus-circle-fill"></i> New</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
                filteredContact.length > 0 ? <>
                    <section className="mt-3">
                        <div className="container">
                            <div className="row">
                                {
                                    filteredContact.map((contact, index) => {
                                        return (
                                            <div className="col-sm-6 mt-3" key={contact.id}>
                                                {
                                                    contact && <ContactCard contact={contact}
                                                                            clickDeleteContact={clickDeleteContact}/>
                                                }
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </section>
                </> : <div className="container mt-3">
                    <div className="row">
                        <div className="col text-center">
                            <p className="h4 text-danger">No Contacts Found</p>
                        </div>
                    </div>
                </div>
            }

            {
                errorMessage.length > 0 && <ErrorMessage errorMessage={errorMessage}/>
            }
        </>
    );
};
