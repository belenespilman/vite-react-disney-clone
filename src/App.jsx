import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'
import { useEffect, useState } from 'react'
import { getMovieByGenreId, getTrendingVideos } from './Services/GlobalApi'
import { genres } from './Constant/GenresList'
import Loading from './Components/Loading'

function App() {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [moviesByGenre, setmoviesByGenre] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMoviesByGenre = async (genreId, genreName) => {
      const res = await getMovieByGenreId(genreId)
      return { name: genreName, movieList: res.data.results }
    }

    getTrendingVideos().then((res) => {
      setTrendingMovies(res.data.results)
    })

    Promise.all(genres.map((genre) => fetchMoviesByGenre(genre.id, genre.name)))
      .then((movies) => {
        setmoviesByGenre(movies)
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      })
  }, [])

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Slider movieList={trendingMovies} />
          <ProductionHouse />
          <GenreMovieList genreMovieList={moviesByGenre} />
        </>
      )}
    </div>
  )
}

export default App
