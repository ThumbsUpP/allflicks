import { useState, useEffect } from 'react'

import useInfiniteScroll from 'react-infinite-scroll-hook';

import useFetch from '../../hooks/useFetch'
import { baseUrl, apiKey } from '../../constants/global'

import MoviesList from '../MoviesList/MoviesList'

import styles from './AllMovies.module.scss'

const AllMovies = () => {
    const [moviesList, setMoviesList] = useState([])
    const [page, setPage] = useState(1)
    const [genre, setGenre] = useState('all')
    const [hasNextPage, setHasNextPage] = useState(true)

    const url = `${baseUrl}/discover/movie?${apiKey}&sort_by=popularity.desc&vote_count.gte=300&with_genres=${genre}&page=${page.toString()}`
    const { loading, error, sendRequest: fetchMovies } = useFetch()

    if (error) { setHasNextPage(false) }

    useEffect(() => {
        const addMovies = movies => {
            const list = [...movies.results]
            setMoviesList(prevMovies => prevMovies.concat(list))
        }
        fetchMovies(url, addMovies)
    }, [fetchMovies, url])

    const [sentryRef] = useInfiniteScroll({
        loading,
        hasNextPage: hasNextPage,
        onLoadMore: () => {
            setPage(page + 1)
        }   
    })

    const changeGenreHandler = e => {
        setMoviesList([])
        setGenre(e.target.value)
    }

    return <section className={styles['all-movies']}>
        <h1>All Movies</h1>
        <select name="genre" id="genre-select" onChange={changeGenreHandler}>
            <option disabled>Genre</option>
            <option value="">All</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="35">Comedy</option>
            <option value="18">Drama</option>
            <option value="36">History</option>
            <option value="10749">Romance</option>
            <option value="878">Sci-Fi</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
        </select>
        {error && <p>Failed to load movies. Please try again.</p>}
        {moviesList && <MoviesList movies={moviesList} />}
        {(loading || hasNextPage) && <div ref={sentryRef}></div>}
    </section>
}

export default AllMovies