import React from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { useReducer } from 'react';
import { FORMULARIO_PROYECTO } from '../../types';

const ProyectoState = props => {

    const initialState = {
        proyectos : [
            { id: 1, nombre: 'Tienda Virtual' },
            { id: 2, nombre: 'Internet' },
            { id: 3, nombre: 'Diseño de Sitio Web' },
            { id: 4, nombre: 'MERN' }
        ],
        formulario : false
    }

    // Dispath para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serrie de funcoines para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;