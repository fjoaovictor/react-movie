import React, { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import { ImFilm } from "react-icons/im";
import '../ReponsiveCSS/ResponsivePages.css';

const Movies = () => {

    const [content, setContent] = useState([]);

    const fetchMovie = async (pages) => {

        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${pages}`);
        
        setContent(data.results)
    }

    useEffect(() => {

        fetchMovie(1);
        

    }, []);

    return (
        <div className="container--content">
            <h1 className="header--title">Movies <ImFilm /></h1>
            <div className="responsive">
                {content.map((e, key) => (
                    <SingleContent
                        key={key}
                        poster_path={e.poster_path}
                        title={e.title}
                        vote_average={e.vote_average}
                    />
                ))}
            </div>
            <div className="pages" style={{ display: 'flex', gap: 50, fontWeight: 900, fontSize:20 }}>
                <a onClick={()=> fetchMovie(1)}>1</a>
                <a onClick={()=> fetchMovie(2)}>2</a>
                <a onClick={()=> fetchMovie(3)}>3</a>
                <a onClick={()=> fetchMovie(4)}>4</a>
                <a onClick={()=> fetchMovie(5)}>5</a>
                <a onClick={()=> fetchMovie(6)}>6</a>
                <a onClick={()=> fetchMovie(7)}>7</a>
            </div>
        </div>

    );
}

export default Movies;