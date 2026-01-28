import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetails4() {
    const { id } = useParams();
    const [movie4, setMovie4] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setMovie4(data));
    }, [id]);

    if (!movie4) return <h3>Loading...</h3>;

    return (
        <div>
            <h2>{movie4.title}</h2>
            <img src={movie4.image} width="200" />
            <p>{movie4.description}</p>
            <h3>Price: ₹{movie4.price}</h3>

            <Link to="/">⬅ Back to Movies</Link>
        </div>
    );
}

export default MovieDetails4;
