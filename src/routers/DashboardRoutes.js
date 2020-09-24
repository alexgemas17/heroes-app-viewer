import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import { Switch, Route, Redirect } from 'react-router-dom'

import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heores/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

/*
    Con DashboardRoutes, encapsulamos toda la lógica una vez que hayamos hecho "login". Así, en login tendrá un estilo, y una vez logeados,
    aparecerá tanto el navbar como el switch con las distintas rutas que podemos hacer en nuestra app.

    Nota1: En path="/marvel/:heroeId" estamos especificando que en la url vamos a recibir un argumento llamado "heroeId"
    Nota2: El Switch está entre div porque es una buena práctica dicho por ellos.
*/
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container mt-3'>
                <Switch>

                    <Route path="/marvel" component={ MarvelScreen } />
                    <Route path="/hero/:heroeId" component={ HeroScreen } />
                    <Route path="/dc" component={ DcScreen } />
                    <Route path="/search" component={SearchScreen} />

                    <Redirect to='/marvel' />

                </Switch>

            </div>

        </>
    )
}
