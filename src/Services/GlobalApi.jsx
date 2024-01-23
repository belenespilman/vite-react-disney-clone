import axios from 'axios'

const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = '2982d6831cef8c918d2af60ec9e8afab'

const movieByGenreBaseURL =
  'https://api.themoviedb.org/3/discover/movie?api_key=2982d6831cef8c918d2af60ec9e8afab'

export const getTrendingVideos = async () => {
  const response = await axios.get(
    `${movieBaseUrl}/trending/all/day?api_key=${api_key}`,
  )
  return response
}

export const getMovieByGenreId = async (id) => {
  const url = movieByGenreBaseURL + '&with_genres=' + id
  const response = await axios.get(url)
  return response
}

export default { getTrendingVideos, getMovieByGenreId }
