import React, { useEffect, useState } from 'react';
import Movies from "./../components/Movies"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
        setMovies(json.data.movies);
        setIsLoading(false);
        console.log(json);
    }
    useEffect(()=>{
        // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        // .then((response) => response.json())
        // .then((json) => {
        //     setMovies(json.data.movies);
        //     console.log(movies);
        //     console.log(json.data.movies);
        //     setIsLoading(false);
        // })
        getMovies();
    },[]) 
    return(
        <div>
            {isLoading ? 
                <h1>Loading...</h1>
                :
                <div>                
                    {movies.map((m)=>(<Movies key={m.id} id={m.id} title={m.title} img={m.medium_cover_image} />))}
                </div>
            }
        </div>
        
    )
}


export default Home;