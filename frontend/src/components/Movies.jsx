import axios from 'axios'
import React, { Fragment ,useEffect, useState} from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import NoImg from './Noimage.jpg'

const Movies = () => {
  const[movieData, setMovieData]=useState([])
  const Api = "https://api.themoviedb.org/3/discover/movie"
  const Images ="https://image.tmdb.org/t/p/w500"
  const MovieCall = async () => {
    const data = await axios.get(Api,{
     params: {
      api_key:`66eb3bde9cca0487f03e78b512b451e4`,
     } 
    })
    const results = data.data.results
    setMovieData(results)
   
  }
  useEffect(()=>{
    MovieCall()
  },[])
  console.log(movieData)
  return (
    <Fragment>
      {movieData.map((movie)=> {
        return(
        <Fragment>
          <div id='container'>
          <AiFillPlayCircle color='green' fontSize={40} id="playIcon"/>
          <img src={movieData.poster_path ? `${Images}${movieData.poster_path}` : NoImg} alt='' />
          <h3>{movieData.title}</h3>
          </div>
          </Fragment>
        )

      })}
    </Fragment>
  )
}

export default Movies