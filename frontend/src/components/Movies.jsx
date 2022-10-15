import axios from 'axios'
import React, { Fragment ,useContext,useEffect, useState} from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import { Container } from './Navbar'
import '../Styles/Videos.css'
import NoImg from './Noimage.jpg'

const Movies = () => {
  const {toggle} = useContext(Container)
  const[movieData, setMovieData]=useState([])
  const [trailer,setTrailer] = useState(true)
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
      <div className={toggle? "mainBgColor" : 'secondaryBgColor'}>
      <div className="movies-container">
      {movieData.map((movie)=> {
        return(
        <Fragment>
          <div id='container'>
          <AiFillPlayCircle color='#fff' fontSize={40} id="playIcon"/>
          <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt='' />
          <h3 id={movie.title.length> 28 ? 'smaller-Text' : ''}>{movie.title}</h3>
          </div>
          </Fragment>
        )

      })}
      </div>
      </div>
    </Fragment>
  )
}

export default Movies