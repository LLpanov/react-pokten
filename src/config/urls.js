const baseURL = 'https://api.themoviedb.org/3'
const headers = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjc5MTc0YzM1ODVhOTE1OTNjMjc1OTVkMzU0ZDE2NSIsInN1YiI6IjYxZmZlYTRkOGYyNmJjMDAxYzdhOTUzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EmLdtvwMxDN6KI_fMEt0GHvneP_bz1PM1zom3_kqTXk"
}
const urls = {

    movie: '/discover/movie',
    movieDetail:'/movie',
    genre: '/genre/movie/list'






}
export {headers, baseURL, urls};
