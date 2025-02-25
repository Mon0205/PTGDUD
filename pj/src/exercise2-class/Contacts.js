import React from 'react';
import "./list.css";


const Contacts = ({ firstname, lastname, phone, address }) => {
    return (
        <div className='contact-card'>
            <h1>{firstname}</h1>
            <h3>{lastname}</h3>
            <hr />
            <p>{phone}</p>
            <hr />
            <p>{address}</p>
        </div>
    );
};

export default Contacts;