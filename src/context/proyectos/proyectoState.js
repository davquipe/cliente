import React from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { useReducer } from 'react';

const ProyectoState = props => {
    const initialState = {
        formulario : false
    }

    // Dispath para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serrie de funcoines para el CRUD

    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;