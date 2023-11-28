import { useEffect, useState } from 'react';
import Movie from '../components/Movie.js';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await ((await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`)).json());
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
        //fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`).then(response => response.json()).then(json => setMovies(json.data.movies));

    }, []);
    console.log(movies);
    return <div>
        {loading ? <h1>Loading...</h1> : <div>{movies.map(x => (
            <Movie id={x.id} key={x.id} medium_cover_image={x.medium_cover_image} title={x.title} summary={x.summary} genres={x.genres} />
        ))}</div>}

    </div>
}

export default Home;