import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import './App.css';
import HOME from './page/HOME';
import Product from './page/Product';
import Media from './page/Media';

import './style.scss';

function App() {
    return (
            <BrowserRouter>
                <header>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/Product">Product</NavLink>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HOME/>}/>
                        <Route path="/Product" element={<Product/>}/>
                        <Route path="/Media" element={<Media/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
    );
}

export default App;
