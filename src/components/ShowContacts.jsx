import React from 'react';
import { PropTypes } from "prop-types";
import { Delete, List, Setul } from 'styles/Styles';

export default function ShowContacts({contacts, state, setState, setShowContact}) {

    const handleDelete = (e) => {
        let delContact = {...state}
        let isDelete = delContact.contacts.filter((contact, index, arr) => {
            if(contact.id === e.target.id){
                arr.splice(index,1)
                return true
            }
            return false
        });

        if(isDelete){
            setState(prev => {
                return {...prev, contacts: delContact.contacts}
            });
            setShowContact(delContact.contacts);
        }
    }

    return (
    <>
        <Setul>
            {contacts.map(contact => {
                return <List key={contact.id}>
                    {contact.name+': '+contact.number}
                    <Delete id={contact.id} onClick={handleDelete}>Delete</Delete>
                </List>
            })}
        </Setul>
    </>
    )
};

ShowContacts.propTypes = {
    contacts: PropTypes.array,
    state: PropTypes.object
};
