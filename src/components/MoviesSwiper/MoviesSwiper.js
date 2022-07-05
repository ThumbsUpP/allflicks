import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper";

import MovieCard from '../MovieCard/MovieCard'

import "swiper/scss"
import "swiper/scss/pagination"
import "swiper/scss/navigation"

import styles from './MoviesSwiper.module.scss'

const MoviesSwiper = props => {
    const movies = props.movies.map(movie => (
        <SwiperSlide key={movie.id}>
            <div className={styles['movie-card']}>
                <MovieCard
                    id={movie.id}
                    title={movie.title}
                    cover={movie.poster_path}
                    year={movie.release_date.substring(0, 4)}
                />
            </div>
        </SwiperSlide>
    ))

    return <ul className={styles.list}>
        <Swiper
            slidesPerView={4}
            spaceBetween={-50}
            pagination={{
                dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerGroup={4}
            loop={true}
            slideToClickedSlide={true}
            speed={900}
            autoplay={{
                delay: 4000,
                disableOnInteraction: true,
            }}
            breakpoints={{
                "@0.40": {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                "@0.50": {
                    slidesPerView: 3,
                },
                "@0.75": {
                    slidesPerView: 4,
                }
            }}
        >
            {movies}
        </Swiper>
    </ul>
}

export default MoviesSwiper