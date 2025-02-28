import React from 'react'

function Item({a}) {
    return (
        <div key={a.id}>
            <span></span>
            <h3>{a.title}</h3>
            <p>{a.price}</p>
        </div> 
    )
}
export default Item