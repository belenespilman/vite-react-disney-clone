import MovieList from './MovieList'

function GenreMovieList({ genreMovieList }) {
  return (
    <div className="w-screen">
      {genreMovieList.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:px-16" key={index}>
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList movieList={item.movieList} index_={index} />
            </div>
          ),
      )}
    </div>
  )
}

export default GenreMovieList
