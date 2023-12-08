import React from 'react';

// Define las props con TypeScript
interface ThirComponentProps {
    nombre: string;
    apellido: string;
    ficha: object;
}

export const ThirComponent: React.FC<ThirComponentProps> = ({ nombre, apellido, ficha }) => {
    return (
        <div className='Comunicacion'>
            <h3>Comunicación entre componentes</h3>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Ficha: {JSON.stringify(ficha)}</p>
        </div>
    );
}
