import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{
        accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDYxMTUxMjE1ZDg5NGUzYWZmYTk2NzYzMjdlMmZiZCIsInN1YiI6IjY1YzI2ZjVlYWY4NWRlMDE4ODM4MTAwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kJXrmdmEj5uDhsOdgFB1yARMpR7CWFbNCgQxJIeYzV4'
    }
})

export default instance;