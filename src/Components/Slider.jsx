import { useRef } from 'react'
import { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

const screenWidth = window.innerWidth

function Slider() {
  const [movieList, setMovieList] = useState([])
  const elementRef = useRef()

  useEffect(() => {
    getTrendingMovies()
  }, [])

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      console.log(res.data.results)
      setMovieList(res.data.results)
    })
  }

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110
  }

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110
  }

  return (
    <div>
      <IoIosArrowBack
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => {
          sliderLeft(elementRef.current)
        }}
      />
      <IoIosArrowForward
        className="hidden md:block  text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => {
          sliderRight(elementRef.current)
        }}
      />
      <div
        className="flex overflow-x-auto w-screen px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => {
          return (
            <img
              key={index}
              src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
              className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md cursor-pointer hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
              alt={item.title || item.name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Slider
