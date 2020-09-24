import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeoresByPublisher'
import { HeroCard } from './HeroCard'

/*
  Mediante el 'publisher', obtenemos la info de los heores.

 */
export const HeroList = ({ publisher }) => {

    // Mientras no cambie el "publisher", que no vuelva a obtener los heroes
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher])

    return (
        <div className='card-columns animate__animated animate__fadeIn'>
            {
                heroes.map( (hero) => (
                    <HeroCard 
                        key={hero.id} { ...hero } 
                    />
                ))
            }
        </div>
    )
}
