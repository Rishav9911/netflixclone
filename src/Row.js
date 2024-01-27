import React, { useEffect, useState } from "react";
import axios from "./axios";
import Youtube from "react-youtube";
import "./Row.scss";
const base_url="https://image.tmdb.org/t/p/original/";

const Row = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchUrl]);

    console.table(movies);

    return (
        <>
        <div className="row">
            <h1>{props.title}</h1>

            <div className="row_poster" >

                {movies.map(movie => (
                <img src={`${base_url}${props.isLarge ? movie.poster_path: movie.backdrop_path}`} 
                alt={movie.name}  key={movie.id}
                className={`actual_poster ${props.isLarge && "actual_posterLarge"}`} />
                  
                ))}

            </div>
             {/* <Youtube  videoId={trailerUrl} opts={opts}/> */}
            </div>
        </>
    );
}
export default Row;