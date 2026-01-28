import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieList4() {
    const [movies4, setMovies4] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setMovies4(data));
    }, []);

    return (
        <div>
            <h2>🎬 Movie List 4</h2>

            {movies4.map((movie) => (
                <div key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                        <h3>{movie.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default MovieList4;
