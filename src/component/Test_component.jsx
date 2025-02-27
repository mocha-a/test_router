import React, { useState } from 'react'

function Test_component(props) {
    let [num, num1] = useState(160);
    let [name, name1] = useState('ADIDAS STAN SMITH');

  return (
    <>
        <div>
            <span></span>
            <h3>{name}</h3>
            <p>${num}</p>
        </div> 
    </>
)}

export default Test_component