/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import HrMovieCard from './HrMovieCard'

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([])
  const elementRef = useRef(null)
  useEffect(() => {
    getMovieByGenreId()
  }, [])

  const getMovieByGenreId = async () => {
    const res = await GlobalApi.getMovieByGenreId(genreId)
    setMovieList(res.data.results)
  }
  const slideRight = (element) => {
    element.scrollLeft += 500
  }
  const slideLeft = (element) => {
    element.scrollLeft -= 500
  }

  return (
    <div className="relative">
      <IoIosArrowBack
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
      p-2 z-10 cursor-pointer 
       hidden md:block absolute
       ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'} `}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8
scrollbar-none cursor-pointer w-screen scroll-smooth pt-4 px-3 pb-4"
      >
        {movieList.map((item) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <IoIosArrowForward
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
      p-2 cursor-pointer z-10 top-0
       absolute right-0 
       ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
      />
    </div>
  )
}

export default MovieList
