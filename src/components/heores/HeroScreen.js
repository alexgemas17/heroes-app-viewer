import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById'

export const HeroScreen = ({history}) => {

    // Con el hook useParams de 'react-router-dom', podemos obtener los parámetros que hemos enviado por el url
    const { heroeId } = useParams()

    // Mientras no cambie el "hero", que no vuelva a cargar nada
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])

    if (!hero)
        return <Redirect to='/' />

    const {
        superhero,
        alter_ego,
        first_appearance,
        characters,
        publisher
    } = hero

    const handleReturn = () => {
        // Si por algún casual se mete directamente en un heroe y le da para atrás, se saldrá de la página
        // Por eso lo mandamos a la página principal
        if (history.lenth <= 2){
            history.push()
        }
        else {
            history.goBack()
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`https://github.com/alexgemas17/heroes-app-viewer/tree/master/public/assets/heroes/${heroeId}.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={ superhero }
                />
            </div>

            <div className="col-8">
                <h3> {superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> {alter_ego} </li>
                    <li className="list-group-item"> <b> Publisher: </b> {publisher} </li>
                    <li className="list-group-item"> <b> First appearance: </b> {first_appearance} </li>
                </ul>

                <h5> Characters: </h5>
                <p> {characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}                
                >
                    Black to {publisher} characters
                </button>
            </div>
        </div>
    )
}
