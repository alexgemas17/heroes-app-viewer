import React from 'react'

/*
    El Router nos pasa tres tipos de props donde pondemo usar ciertas funcionalidades. En history, tenemos la funcionalidad de ir atrás, ir a otra pantalla, etc.. 
*/
export const LoginScreen = ({ history }) => {

    const handleOnClick = () => {
        // Con history.push('/'), hacemos que avance a la pantalla '/' (podemos ir atrás desde el buscador)

        // Con history.replace('/'), sustituimos la dirección actual por esa, entonces no puedes ir atrás porque no se registra
        history.replace('/')
    }

    return (
        <div className='container mt-5'>
            <h1> LoginScreen!! </h1>
            <hr />

            <button 
                className='btn btn-primary'
                onClick={ handleOnClick }
            >
                Login
            </button>
        </div>
    )
}
