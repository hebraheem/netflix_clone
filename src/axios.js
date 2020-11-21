import axios from "axios"


// set base url to make request to the movie data base
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;