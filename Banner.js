import {React,useState,useEffect} from 'react';
import "./Banner.css";
import requests from "./Request";
import axios from "./axios";


function Banner() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
       const request = await axios.get(requests.fetchComedyMovies);
            setMovies(
                request.data.results
                [Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
             return request;
                }
                fetchData();
      
 }, []);

    console.log(movies);


    const truncate=(string, n)=>{
        
      return string?.length > n?  string.substring(0,n-1) +"...": string;
        }

    
  return (
    <header className="banner" 
    style ={{
        backgroundSize: "cover",
        backgroundImage:`url("http://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition:"center center"
        }}>
    <div className="banner__content">
    <h1 className="banner__title"> {movies?.title}</h1>
     <h4 className="banner__popularity"> Rating * : {movies?.vote_average}</h4>
     <h4 className="banner_release"> Release Date: {movies?.release_date}</h4>

    <div className="banner__buttons">
<button className="banner__button"> Play </button>
<button  className="banner__button"> Mylist</button>
    </div>   
    
     <p className="banner__description">
   { truncate(movies?.overview , 150 )}
    </p>

    
    </div>
    <div className="banner--fadeButtom" />
      
    </header>
  )
}

export default Banner
