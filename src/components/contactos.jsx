import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../classes/contact';

const Contactos = ({ contact, complete, remove }) => {

    function contactConnectedIcon() {
        if(contact.conected) {
            return (<i onClick={() => complete(contact)} className='bi-toggle-on task-action' style={{color:'green'}}></i>)
        } else {
            return (<i onClick={() => complete(contact)} className='bi-toggle-off task-action' style={{color:'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.surname}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {contactConnectedIcon()}
                <i onClick={() => remove(contact)} className='bi-trash task-action' style={{color:'tomato', fontSize:'20px'}}></i>
            </td>
        </tr>
    );
}

Contactos.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default Contactos;
