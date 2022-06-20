import React, { useRef } from "react";
import { useEffect, useState, } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import '../ReponsiveCSS/ResponsivePages.css';
import { ImSearch } from "react-icons/im";


const Search = () => {


    const [content, setContent] = useState([]);
    const [query, setQuery] = useState();
    const initial = useRef(null);

    const fetchSearch = async (query) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);

        setContent(data.results);
        console.log(data.results);
    }

    function inputSearch(e) {
        if (e.keyCode === 13) {
            const res = e.target.value;
            fetchSearch(res);
            initial.current.style.display = 'none';
        }
    }

    return (
        <div>
            <div className="header--input">
                <h1 className="header--title"><ImSearch /> Search  </h1>
                <div className='input--search'>
                    <input type="text" placeholder='Search for yours favorite movies' onKeyDown={(e) => inputSearch(e)} />

                </div>
            </div>
            <div className="responsive">
                <div ref={initial} className="container--search" style={{
                    display: 'flex',
                    width: 1000,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 80
                }}>
                    <h1 style={{ color: 'rgba(255, 255, 255, 0.453)', fontSize: 50, textAlign: 'center' }}>Search your movie or TV series</h1>
                </div>



                {content && content.map((e, key) => (

                    e.media_type === 'person' ? ''
                        :
                        e.media_type === 'tv' ?
                            <SingleContent
                                key={key}
                                poster_path={e.poster_path}
                                title={e.name}
                                vote_average={e.vote_average}
                            />
                            :
                            <SingleContent
                                key={key}
                                poster_path={e.poster_path}
                                title={e.title}
                                vote_average={e.vote_average}
                            />

                ))}
            </div>
        </div>
    );
}

export default Search;