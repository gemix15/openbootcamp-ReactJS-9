import React, { useState, useEffect } from 'react'

export const ClockHook = () => {
    const initialPerson = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [person, setPerson] = useState(initialPerson);

    useEffect(() => {
        const tickInterval = setInterval(() => {
            actualPerson();
        }, 1000);

        return () => {
            clearInterval(tickInterval);
        };
    });

    const actualPerson = () => {
        return setPerson({
            fecha: person.fecha,
            edad: person.edad + 1,
            nombre: person.nombre,
            apellidos: person.apellidos,
        });
    };

    return (
        <div>
            <h2>Hora Actual:{person.fecha.toLocaleTimeString()}</h2>
            <h3>{person.nombre} {person.apellidos}</h3>
            <h1>Edad: {person.edad}</h1>
        </div>
    );
}


