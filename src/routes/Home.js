import { useEffect } from "react";
import { useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
            {movies.map((movie) => (
                <Movie 
                    coverImg = {movie.medium_cover_image}
                    title = {movie.title}
                    year = {movie.year}
                    genres = {movie.genres}
                    summary = {movie.summary}
                    key={movie.id}
                    id={movie.id}
                />
            ))}
            </div>
        )}
        </div>)
    ;
}

export default Home;