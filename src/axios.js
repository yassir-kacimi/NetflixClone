// every single request that i wanna send is gonna have this starting url
import axios from "axios";

const instance = axios.create({ // axios do what postman does
    baseURL: "https://api.themoviedb.org/3",  
});

export default instance;