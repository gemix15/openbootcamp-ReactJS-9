import React, { useState } from 'react';
import { Contact } from '../classes/contact';
import Contactos from './contactos';
import FormContactos from './forms/formContactos';

const ListaContactos = () => {

    const contact1 = new Contact('Maria', 'Gómez', 'maria@gmail.com', true);
    const contact2 = new Contact('Julia', 'Perez', 'juls@gmail.com', false);
    const contact3 = new Contact('Elena', 'Valls', 'helen@gmail.com', true);

    const [contacts, setContacts] = useState([contact1, contact2, contact3]);

    function changeContact(contact){
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact[index].conected = !tempContact[index].conected;
        setContacts(tempContact);
    }

    function removeContact(contact){
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index,1);
        setContacts(tempContact);
    }

    function addContact(contact){
        const tempContact = [...contacts];
        tempContact.push(contact);
        setContacts(tempContact);
    }



    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Contacts:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height:'400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Surname</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Connected</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <Contactos key={index} contact={contact} complete={changeContact} remove={removeContact}></Contactos>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <FormContactos add={addContact}></FormContactos>
        </div>
    );
}

export default ListaContactos;
