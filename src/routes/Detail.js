import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Detail = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    console.log(id)
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json)
        setData(json.data.movie);
    }
    console.log(data);
    useEffect(() => {
        getMovie();
    },[])
    return(
        <div>
            <img src={data.large_cover_image} />
            <div>{data.title}</div>            
        </div>

    )
}

export default Detail;