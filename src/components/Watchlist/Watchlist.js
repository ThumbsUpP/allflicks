import { useContext } from 'react'
import FavContext from '../../store/fav-context'
import MoviesList from '../MoviesList/MoviesList'

const Watchlist = () => {
    const ctx = useContext(FavContext)

    return <section>
        <h1>My Watchlist</h1>
        {ctx.favMovies && <MoviesList movies={ctx.favMovies} />}
    </section>
}

export default Watchlist