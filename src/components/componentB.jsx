import React, { useState } from 'react';
import PropTypes from 'prop-types';


function ComponentB(contactStatus) {
    const [connected, setConnected] = useState(contactStatus);
    return (
        <div>
        <h3> {connected === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
        <button onClick={() => setConnected(!connected)}>{connected === false ? 'Conectar' : 'Desconectar'}</button>
        </div>
    );
}


ComponentB.propTypes = {
    contactStatus: PropTypes.bool
};


export default ComponentB;
