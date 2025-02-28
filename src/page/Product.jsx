import { useState } from 'react';
import ItemList from '../component/ItemList';

function Product() {
    const data = [
        {id:0, title:'ADIDAS STAN SMITH', price:'$180'},
        {id:1, title:'ADIDAS STAN SMITH', price:'$200'},
    ]

    const [State, setState] = useState('movie');
    const data2 = {
        movie:["movie1", "movie2"],
        music:["music1", "music2"]
    }
    
    return (
        <article>
            <h1>React State & Props</h1>

            <button onClick={()=>{setState('movie')}}>movie</button>
            <button onClick={()=>{setState('music')}}>music</button>

            {
                data2[State].map((itme)=><p>{itme}</p>)
            }

            <ItemList data={data}/> 
        </article>
    )
}

export default Product