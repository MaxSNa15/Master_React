import React from 'react'

export const EventComponent = () => {

    const clickBoton = (e: React.MouseEvent<HTMLButtonElement>, nombre: string) => {
        alert(`Hola ${nombre}`)
    }

    const mouseEnter = (e: React.MouseEvent<HTMLInputElement>) => {
        alert("Mouse Enter")
    }

    return (
        <div className='Flexi'>
            <h3>Eventos Click</h3>
            {/* Evento con click */}
            <button onClick={(e) => clickBoton(e, "SNava")}>Click</button>
            {/* Evento Doble click */}
            <button onDoubleClick={(e) => clickBoton(e, "SNava")}>Doble Click</button>
            {/* Evento Mouse Enter */}
            <input type="text" placeholder="Mouse Enter" onMouseEnter={ mouseEnter } />
            {/* Evento Mouse Leave */}
            <input type="text" placeholder="Mouse Leave" onMouseLeave={ () => alert("Mouse Leave") } />
            {/* Evento Focus */}
            <input type="text" placeholder="Focus" onFocus={ () => alert("Focus") } />
            {/* Evento Blur */}
            <input type="text" placeholder="Blur" onBlur={ () => alert("Blur") } />
            {/* Evento Change */}
        </div>
    )
}
