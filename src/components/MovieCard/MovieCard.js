import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    return <Link to={`/movie/${props.id}`}>
        <figure>
            <img src={`https://image.tmdb.org/t/p/w154/${props.cover}`} alt={`${props.title} poster`} />
            <figcaption>{props.title}</figcaption>
        </figure>
        <p>{props.year}</p>
    </Link>
}

export default MovieCard
