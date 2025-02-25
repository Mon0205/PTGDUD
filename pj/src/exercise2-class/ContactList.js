import React from 'react';
import Contacts from './Contacts';
import "./list.css";
const ContactList = ({ contacts }) => {
    return (
        <div className='contact-list'>
            {contacts.map(contact => (
                <Contacts
                    firstname={contact.firstName}
                    lastname={contact.lastName}
                    phone={contact.phone}
                    address={contact.address}
                >
                </Contacts>
            ))}
        </div>
    );
};

export default ContactList;