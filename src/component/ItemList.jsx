import React from 'react';
import Item from './Item';

function ItemList({data}) {
    
    return (
        <div className='test'>
            {
                data.map((a)=>{
                    return <Item a={a}/>
                })
            }
        </div>
)}

export default ItemList