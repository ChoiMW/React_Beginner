
import { useEffect, useState } from "react";
import {
    useParams,
} from "react-router-dom";

function Detail() {
    const x = useParams();
    console.log(x);
    const { id } = useParams();
    console.log(id);
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState(0);



    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setLoading(false);
        setDetail(json.data.movie);
        console.log(json);
    };

    useEffect(() => {
        getMovie();
    }, []);



    return (
        <div>
            {loading ? <h1>Loading...</h1> : (<div>
                <img src={detail.large_cover_image} alt={detail.id} />
                <h2>{detail.title_long}</h2><h3>rate: {detail.rating} / runtime: {detail.runtime > 0 ? detail.runtime : "? "} min</h3>
                {console.log(detail.description_full)}
                {detail.description_full !== "" ? (<h3>Description</h3>) : ""}
                {detail.description_full !== "" ? (<p>{detail.description_full}</p>) : ""}
                <ul>
                    {detail.genres !== undefined ? detail.genres.map((g) => <li key={g}>{g}</li>) : "xxx"}
                </ul>
            </div>)}
        </div >
    );

}

export default Detail; 