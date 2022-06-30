import MovieCard from '../MovieCard/MovieCard'

import styles from './MoviesList.module.scss'

const MoviesList = props => {
    const movies = props.movies.map(movie => (
        <div className={styles['movie-card']} key={movie.id}>
            <MovieCard
                id={movie.id}
                title={movie.title}
                cover={movie.poster_path}
                year={movie.release_date.substring(0, 4)}
            />
        </div>
    ))

    return <ul className={styles.list}>
        {movies}
    </ul>
}

export default MoviesList