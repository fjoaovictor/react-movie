import React from 'react';
import { Route, Routes } from "react-router-dom";

import Trending from './pages/Trending/Trending';
import Series from './pages/Series/Series';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';

function RoutesApp() {

    return (
        
            <Routes>
                <Route path='/' element={<Search />}> </Route>
                <Route path='/Trending' element={<Trending />}></Route>
                <Route path='/Movies' element={<Movies />}></Route>
                <Route path='/Series' element={<Series />}></Route>
            </Routes>
    );
}

export default RoutesApp;
