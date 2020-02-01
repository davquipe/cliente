import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyectos = [
        { nombre: 'Eligir Plataforma', estado: true },
        { nombre: 'Eligir Colores', estado: false },
        { nombre: 'Eligir Plataforma de Pago', estado: false },
        { nombre: 'Eligir Hosting', estado: true }
    ]

    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virual</h2>

            <ul className="listado-tareas">
                {tareasProyectos.length === 0 
                    ? (<li className="tarea"><p>No hay Tareas</p></li>)

                    : tareasProyectos.map(tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
                }
            </ul>
            <button
                    type="button"
                    className="btn btn-eliminar"
                >Eliminar Proyecto &times;</button>
            
        </Fragment>
     );
}
 
export default ListadoTareas;