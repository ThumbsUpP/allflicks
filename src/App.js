import { Route, Routes } from 'react-router-dom';

import AllMovies from './components/AllMovies/AllMovies'
import MoviePage from './components/MoviePage/MoviePage'
import Layout from './components/Layout/Layout';
import BestMovies from './components/BestMovies/BestMovies';

const App = () => {
    return <Layout>
        <Routes>
            <Route path='/' element={<><BestMovies /><AllMovies /></>} />
            <Route path='/movie' element={<MoviePage />} />
            <Route path='/best' element={<BestMovies />} />
            <Route path='/movie/:movieId' element={<MoviePage />} />
            <Route path='*' element={<div>yoyoyoy</div>} />
        </Routes>
    </Layout>
}

export default App
