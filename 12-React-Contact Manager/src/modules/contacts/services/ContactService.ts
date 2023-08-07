import axios from "axios";
import {IContacts} from "../models/IContacts";
import {IGroups} from "../models/IGroups";

export class ContactService {
    private static serverUrl: string = "http://localhost:9000";

    /**
     @usage: get all contact
     @method: GET
     @params: no-params
     @url: http://localhost:9000/contacts
     */
    public static getAllContacts(): Promise<{ data: IContacts[] }> {
        const dataUrl: string = `${this.serverUrl}/contacts`;
        return axios.get(dataUrl);
    }

    /**
     @usage: get a single contact
     @method: GET
     @params: no-params
     @url: http://localhost:9000/contacts/:contactId
     */

    public static getAContact(contactId: string): Promise<{ data: IContacts }> {
        const dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
        return axios.get(dataUrl)
    }

    /**
     @usage: Create a contact
     @method: POST
     @params: no-params
     @url: http://localhost:9000/contacts
     */

    public static createContact(contact: IContacts): Promise<{ data: IContacts }> {
        const dataUrl: string = `${this.serverUrl}/contacts`;
        return axios.post(dataUrl, contact)
    }

    /**
     @usage: Update a contact
     @method: PUT
     @params: no-params
     @url: http://localhost:9000/contacts:contactId
     */

    public static updateContact(contact: IContacts, contactId: string): Promise<{ data: IContacts }> {
        const dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
        return axios.put(dataUrl, contact)
    }

    /**
     @usage: Create a contact
     @method: Delete
     @params: no-params
     @url: http://localhost:9000/contacts:contactId
     */

    public static deleteContact(contactId: string): Promise<{ data: {} }> {
        const dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
        return axios.delete(dataUrl)
    }

    /**
     @usage: get all groups
     @method: GET
     @params: no-params
     @url: http://localhost:9000/groups
     */
    public static getAllGroups(): Promise<{ data: IGroups[] }> {
        const dataUrl: string = `${this.serverUrl}/groups`;

        return axios.get(dataUrl);
    }

    /**
     @usage: get a group
     @method: GET
     @params: no-params
     @url: http://localhost:9000/groups/groupId
     */
    public static getAGroup(contact: IContacts): Promise<{ data: IGroups }> {
        let {groupId} = contact;
        const dataUrl: string = `${this.serverUrl}/groups/${groupId}`;

        return axios.get(dataUrl);
    }

}