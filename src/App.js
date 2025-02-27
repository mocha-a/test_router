import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import './App.css';
import HOME from './page/HOME';
import Product from './page/Product';
import { useState } from 'react';

import './style.scss';

function App() {
    const [color, setColor] = useState('white');

    return (
        <div style={{background:color}}>
            <BrowserRouter>
                <header>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/Product">Product</NavLink>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HOME c={setColor}/>}/>
                        <Route path="/Product" element={<Product c={setColor}/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
