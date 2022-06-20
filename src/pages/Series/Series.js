import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import '../ReponsiveCSS/ResponsivePages.css';
import { ImTv } from "react-icons/im";
const Series = () => {

    const [content, setContent] = useState([]);

    const fetchSeries = async (page) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}`);

        setContent(data.results);
    }

    useEffect(() => {
        fetchSeries(1);

    }, []);

    return (
        <div className="container--content">
            <h1 className="header--title">TV Series <ImTv /></h1>
            <div className="responsive">
                {content.map((e, key) => (
                    <SingleContent
                        key={key}
                        poster_path={e.poster_path}
                        title={e.name}
                        vote_average={e.vote_average}
                    />
                ))}
            </div>
            <div className="pages" style={{ display: 'flex', gap: 50, fontWeight: 900, fontSize:20 }}>
                <a onClick={()=> fetchSeries(1)}>1</a>
                <a onClick={()=> fetchSeries(2)}>2</a>
                <a onClick={()=> fetchSeries(3)}>3</a>
                <a onClick={()=> fetchSeries(4)}>4</a>
                <a onClick={()=> fetchSeries(5)}>5</a>
                <a onClick={()=> fetchSeries(6)}>6</a>
                <a onClick={()=> fetchSeries(7)}>7</a>
            </div>
        </div>
    );
}

export default Series;