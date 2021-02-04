import {React,useState,useEffect} from 'react'
import axios from "./axios";
import "./Row.css";

function Row({title, fetchurl,isLargeRow= false, popularity}) {
    const baseurl = "http://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchurl);
            setMovies(request.data.results);
            return request;

        }
fetchData();

    }, [fetchurl]);
    console.log(movies);
  return (
    <div className="row">
    
     <h2> {title} </h2>
     <div className="row__posters">
     {movies.map(movie => (
         <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
         key={movie.id}
         src={`${baseurl}${isLargeRow ? movie.poster_path: movie.backdrop_path }`} alt ={movie.name} />
          ))}
         
     
    </div>
    </div>
  )
}

export default Row
