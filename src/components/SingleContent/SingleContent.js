import { useEffect, useState } from "react";
import axios from "axios";
import './SingleContent.css';
import React from "react";

const SingleContent = ({
    poster_path,
    title,
    vote_average,
}) => {

    return (
        <div className="movie--container">
            <div className="movie--view">
                <div className="movie--infos">
                    <div className="div--movie">

                        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} ></img>
                        
                        <div className="infos">
                            <h1>{title}</h1>
                            {
                                vote_average >= 7 ? <h4 className="average" style={{ color: 'green' }}>{vote_average}</h4> :
                                vote_average < 7 ? <h4 className="average" style={{ color: 'yellow' }}>{vote_average}</h4> :
                                <h4 className="average" style={{ color: 'red' }}>{vote_average}</h4>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};




export default SingleContent;
