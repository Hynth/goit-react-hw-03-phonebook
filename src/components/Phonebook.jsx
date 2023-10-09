import React from 'react'
import { PropTypes } from "prop-types";
import { SubmitBtn, Form } from 'styles/Styles';
import { nanoid } from 'nanoid'

export default function Phonebook({state, setState, setShowContact}) {
    const handleInput = (event) => {
        setState({...state, [event.target.name]: event.target.value});
    };

    const handleNewContact = (e) => {
        let newState = {...state};
        if (newState.contacts.some( contact => contact.name.toLowerCase().trim() === state.name.toLowerCase().trim())){
            return alert(`${state.name} is already in contacts.`);
        }
        else{
            let newContact = {
                id: nanoid(),
                name: newState.name,
                number: newState.number
            };
            newState.contacts.push(newContact);
            newState.name = '';
            newState.number = '';
            setState(newState);
            setShowContact(newState.contacts);
        }
    }

    return (
    <>
        <h1>Phonebook</h1>
        <Form id='form'>
            <label>Name</label>
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only    letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            value={state.name}
            onChange={handleInput}
            required
            />
            <label>Number</label>
            <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={state.number}
            onChange={handleInput}
            required
            />
            <SubmitBtn type='button' onClick={handleNewContact}>Add Contact</SubmitBtn>
        </Form>
    </>
    )
};

Phonebook.propTypes = {
    state: PropTypes.object
};
