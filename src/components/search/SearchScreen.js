import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { HeroCard } from '../heores/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    
    const location = useLocation()
    const {q = ''} = queryString.parse(location) 

    const [formValues, handleInputChange] = useForm({
        searchText: q
    })

    const {searchText} = formValues

    const heroesFiltered = getHeroesByName(searchText);

    const handleInput = (e) => {
        e.preventDefault()
        console.log(searchText)
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1> Search </h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                    <hr/>

                    <form onSubmit={handleInput}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn mt-2 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>


                <div className="col-7">
                    <h4> Results </h4>

                    {
                        heroesFiltered.map( hero =>(
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
