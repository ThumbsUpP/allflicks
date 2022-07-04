import React, { Suspense } from 'react'

import { Route, Routes } from 'react-router-dom';

import AllMovies from './components/AllMovies/AllMovies'
import Layout from './components/Layout/Layout'
import BestMovies from './components/BestMovies/BestMovies'

const MoviePage = React.lazy(() => import('./components/MoviePage/MoviePage'))

const App = () => {
    return <Layout>
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path='/' element={<><BestMovies /><AllMovies /></>} />
                <Route path='/movie' element={<MoviePage />} />
                <Route path='/best' element={<BestMovies />} />
                <Route path='/movie/:movieId' element={<MoviePage />} />
                <Route path='*' element={<div>yoyoyoy</div>} />
            </Routes>
        </Suspense>
    </Layout>
}

export default App
