import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { MovieListItem, MoviePoster, MovieTitle } from './MoviesList.styled';
import placeholder from '../images/placeholder.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1040: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      navigation
      pagination={{ clickable: true }}
    >
      {films.map(movie => (
        <SwiperSlide key={movie.id}>
          <MovieListItem>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MoviePoster>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                      : `url(${placeholder})`
                  }
                  alt={movie.original_title}
                  width="200"
                />
              </MoviePoster>
              <MovieTitle> {movie.title} </MovieTitle>
            </Link>
          </MovieListItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default MovieList;
