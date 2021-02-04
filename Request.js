const API_KEY="dbe8d2465156523c3a478e1ced145808"
const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanticMovies:`discover/movie?api_key=${API_KEY}&with_geners=10749`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_geners=99`,
    
};

export default requests;