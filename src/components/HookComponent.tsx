import React, {useState} from 'react'

export const HookComponent = () => {

    // Uso de useState en React
    const [nombre, setNombre] = useState<string>("SNava"); // valor inicial
    const cambioNombre = (e: React.MouseEvent, nombreFijo: string) => {
        setNombre(nombreFijo);
    }
    // -------------------------------------------------------------------------------------------------------------
    const [edad, setEdad] = useState<number>(25); // valor inicial
    const cambioEdad = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const valor = e.currentTarget.value;
        // Asegúrate de convertir el valor a número ya que el valor del input es siempre un string
        const edadFija = parseInt(valor, 10); // 10 es la base de la conversión
        if (!isNaN(edadFija)) {
            setEdad(edadFija);
        }
    };


    return (
        <div className='Hooks'>
            <h3>Uso de Hooks en Reack</h3>
            <p>El nombre es: <strong> {nombre} </strong> Edad: <strong> {edad} </strong></p>
            <input type="text" placeholder="Cambia la edad" onKeyDown={cambioEdad}/>
            <button onClick={ e => cambioNombre(e, "Sar")}> Cambiar Nombre </button>
        </div>
    )
}
