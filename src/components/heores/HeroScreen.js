import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById'

export const HeroScreen = ({history}) => {

    const { heroeId } = useParams()
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
                    src={process.env.PUBLIC_URL + `/assets/heroes/${heroeId}.jpg`}
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
