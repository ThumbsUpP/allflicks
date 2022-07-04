import React, { Suspense } from 'react'

import { Route, Routes } from 'react-router-dom';

import AllMovies from './components/AllMovies/AllMovies'
import Layout from './components/Layout/Layout'
import BestMovies from './components/BestMovies/BestMovies'

const MoviePage = React.lazy(() => import('./components/MoviePage/MoviePage'))
const WatchList = React.lazy(() => import('./components/Watchlist/Watchlist'))

const App = () => {
    return <Layout>
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path='/' element={<><BestMovies /><AllMovies /></>} />
                <Route path='/movie' element={<MoviePage />} />
                <Route path='/best' element={<BestMovies />} />
                <Route path='/movie/:movieId' element={<MoviePage />} />
                <Route path='/watchlist' element={<WatchList />} />
                <Route path='*' element={<div>Error 404</div>} />
            </Routes>
        </Suspense>
    </Layout>
}

export default App
