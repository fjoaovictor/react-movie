import React, { useEffect, useRef, } from 'react';


import './Menu.css';
import logo from './logo.png';

import { ImHome, ImTv, ImFilm, ImFire } from "react-icons/im";

import { useNavigate, useLocation } from 'react-router-dom';



function Menu() {

    const popular = useRef(null);
    const home = useRef(null);
    const movies = useRef(null);
    const series = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    const redColor = '#f07474';
    const blueColor = '#7474f0';

    useEffect(() => {

        if (location.pathname === '/') {
            home.current.style.color = blueColor;
        }
        else if (location.pathname === '/Trending') {
            popular.current.style.color = redColor;
        }
        else if (location.pathname === '/Movies') {
            movies.current.style.color = blueColor;
        }
        else if (location.pathname === '/Series') {
            series.current.style.color = blueColor;
        }

        home.current.addEventListener('click', (e) => {
            home.current.style.color = blueColor;
            popular.current.style.color = '';
            movies.current.style.color = '';
            series.current.style.color = '';
        })
        popular.current.addEventListener('click', (e) => {
            popular.current.style.color = redColor;
            movies.current.style.color = '';
            series.current.style.color = '';
            home.current.style.color = '';
        })
        movies.current.addEventListener('click', (e) => {
            movies.current.style.color = blueColor;
            popular.current.style.color = '';
            series.current.style.color = '';
            home.current.style.color = '';
        })
        series.current.addEventListener('click', (e) => {
            series.current.style.color = blueColor;
            popular.current.style.color = '';
            home.current.style.color = '';
            movies.current.style.color = '';
        })

    }, []);

    return (

        <div className="menu">
            <div className="menu--nav">
                <div className="nav--container">
                    <div className="nav--log">

                        <img src={logo} style={{
                            width: 40
                        }}></img>
                        <h1>Ɉ Movies</h1>

                    </div>
                    <div className="nav--menu__item">
                        <a ref={home} onClick={() => navigate('/')}><ImHome /> Home</a>
                        <a ref={popular} onClick={() => navigate('/Trending')} className='fire' ><ImFire /> Trending</a>
                        <a ref={movies} onClick={() => navigate('/Movies')}><ImFilm /> Movies</a>
                        <a ref={series} onClick={() => navigate('/Series')} ><ImTv /> TV Series</a>

                    </div>

                </div>
            </div>

        </div>
    )

}

export default Menu;