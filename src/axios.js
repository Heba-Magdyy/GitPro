import axios from "axios";

const Data = axios.create({
    baseURL: "https://dummyjson.com/posts",
});


export { Data };
