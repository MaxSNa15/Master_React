import React from 'react';
import { Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { Paginacion1 } from '../components/Paginacion1';
import { Paginacion2 } from '../components/Paginacion2';
import { Paginacion3 } from '../components/Paginacion3';

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Paginacion1/>} />
                <Route path='/UNO' element={<Paginacion1/>} />
                <Route path='/DOS' element={<Paginacion2/>} />
                <Route path='/TRES' element={<Paginacion3/>} />
                {/* Pagina por defecto */}
                <Route path='*' element={(
                    <div>
                        <h3> Pagina por defecto </h3>
                        <p> Esta es una pagina de prueba </p>
                        <p> Numero CUALQUIERA </p>
                        <Link to='/'> Pagina 1 </Link> <br/>
                        <Link to='/UNO'> Pagina 1 </Link> <br/>
                        <Link to='/DOS'> Pagina 2 </Link> <br/>
                        <Link to='/TRES'> Pagina 3 </Link> <br/>
                    </div>
                )} />
            </Routes>
        </BrowserRouter>
    )
}
