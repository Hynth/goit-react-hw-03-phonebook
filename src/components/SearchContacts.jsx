import { PropTypes } from "prop-types";
import { FormSearch } from 'styles/Styles';


export default function SearchContacts({state, setState, setShowContact}) {
  

  const handleInput = (event) => {
    setState(prev => {
      return {...prev, 
        filter: event.target.value}
    });

    if(!!state.filter.trim()) {
      setShowContact(state.contacts.filter(contact => contact.name.toLowerCase().includes(event.target.value)))
    }
    else {
      setShowContact(state.contacts);
    }
  };
  return (
    <>
      <h2>Contacts</h2>
      <FormSearch>
          <label>Find contacts by name</label>
          <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          value={state.filter}
          onChange={handleInput}
          required
          />
      </FormSearch>
      
    </>
  )
};



SearchContacts.propTypes = {
  state: PropTypes.object
};
