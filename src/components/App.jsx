import { useState, useEffect } from "react";
import Phonebook from "./Phonebook";
import SearchContacts from "./SearchContacts";
import ShowContacts from "./ShowContacts";

export const App = () => {
  
  const LOCALSTORAGE_KEY = "phonebook-state";
  const storedContacts = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  const [state, setState] = useState({
    contacts: storedContacts,
    filter: '',
    name: '',
    number: ''
  });

  const [showContact, setShowContact] = useState(state.contacts);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state.contacts));
    
  }, [state]);  


  return (
    <div>
      <Phonebook state={state} setState={setState} setShowContact={setShowContact}/>      
      <SearchContacts state={state} setState={setState} setShowContact={setShowContact}/>
      <ShowContacts contacts={showContact} state={state} setState={setState} setShowContact={setShowContact}/>
    </div>
  );
};
