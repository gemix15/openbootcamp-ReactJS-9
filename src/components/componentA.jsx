import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../classes/contact';
import ComponentB from './componentB';


const ComponentA = ({contact}) => {
    return (
        <div>
            <h3>Nombre: {contact.name}</h3>
            <h3>Apellido: {contact.surname}</h3>
            <h3>Email: {contact.email}</h3>
            <ComponentB contactStatus={contact.connected} />
        </div>
    );
};


ComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ComponentA;
