import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key= "2982d6831cef8c918d2af60ec9e8afab" 


//--url 'https://api.themoviedb.org/3/trending/\

const getTrendingVideos=axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);


export default{ getTrendingVideos }