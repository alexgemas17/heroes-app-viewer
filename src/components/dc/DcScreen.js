import React from 'react'
import { HeroList } from '../heores/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h1> Dc Comics</h1>
            <hr />

            <HeroList publisher={'DC Comics'} />
        </div>
    )
}