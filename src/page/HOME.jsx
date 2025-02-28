import React from 'react'
import { NavLink } from 'react-router-dom'

function HOME() {

    return (
        <>
            <h1>React 샘플 만들기</h1>
            <div>
                <NavLink to="/media" state='movie'>Movie</NavLink>
                <NavLink to="/media" state='music'>Music</NavLink>
                <NavLink to="/media" state='game'>Game</NavLink>
            </div>
        </>
    )
}

export default HOME