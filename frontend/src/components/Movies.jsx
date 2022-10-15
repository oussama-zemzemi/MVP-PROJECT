import axios from 'axios'
import React, { Fragment ,useEffect, useState} from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'

const Movies = () => {
  const[movieData, setMovieData]=useState([])
  const Api = "https://api.themoviedb.org/3/discover/movie"
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
        <Fragment>
          <div id='container'>
          <AiFillPlayCircle color='green' fontSize={40} id="playIcon"/>
          </div>
          </Fragment>

      })}
    </Fragment>
  )
}

export default Movies