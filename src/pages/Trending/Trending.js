import React from "react";
import { useEffect, useState, } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import '../ReponsiveCSS/ResponsivePages.css';
import { ImFire } from "react-icons/im";
const Trending = () => {


    const [content, setContent] = useState([]);

    const fetchTrending = async (page) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);

        setContent(data.results);
    }

    useEffect(() => {

        fetchTrending(1);

    }, []);

    return (
        <div className="container--content">
            <h1 className="header--title">Trending <ImFire /></h1>
            <div className="responsive">
                {content && content.map((e, key) => (
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
            <div className="pages" style={{ display: 'flex', gap: 50, fontWeight: 900, fontSize:20 }}>
                <a onClick={()=> fetchTrending(1)}>1</a>
                <a onClick={()=> fetchTrending(2)}>2</a>
                <a onClick={()=> fetchTrending(3)}>3</a>
                <a onClick={()=> fetchTrending(4)}>4</a>
                <a onClick={()=> fetchTrending(5)}>5</a>
                <a onClick={()=> fetchTrending(6)}>6</a>
                <a onClick={()=> fetchTrending(7)}>7</a>
            </div>
        </div>
    );
}

export default Trending;