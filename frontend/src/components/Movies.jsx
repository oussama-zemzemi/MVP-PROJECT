import axios from 'axios'
import React, { Fragment ,useContext,useEffect, useState} from 'react'
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai'
import { Container } from './Navbar'
import '../Styles/Videos.css'
import NoImg from './Noimage.jpg'
import TrailerMovies from '../Trailers/TrailerMovies'

const Movies = () => {
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const[movieData, setMovieData]=useState([])
  const [trailer,setTrailer] = useState(true)
  const [movietitle, setMovieTitle] = useState('')
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`
  const Images ="https://image.tmdb.org/t/p/w500"
  const MovieCall = async () => {
    const data = await axios.get(Api,{
     params: {
      api_key:`66eb3bde9cca0487f03e78b512b451e4`,
      query:input
     } 
    })
    const results = data.data.results
    setMovieData(results)
   
  }
  useEffect(()=>{
    setTimeout(()=>{
      MovieCall()
    },100)  
  },[input])
  console.log(movieData)
  const MoviesTitle = (movie) =>{
    setMovieTitle(movie.title)
    setTrailer(!trailer)

  }
  return (
    <Fragment>
      <div className={toggle? "mainBgColor" : 'secondaryBgColor'}>
      <div className="movies-container">
      {movieData.map((movie)=> {
        return(
        <Fragment key={movie.id}>
          <div id={trailer ? 'container' : 'NoContainer'}>
          <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={()=> MoviesTitle(movie)}/>
          <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt=''  onClick={()=> MoviesTitle(movie)} />
          <h3 id={movie.title.length> 28 ? 'smaller-Text' : ""} className={toggle ? 'mainColor' : 'secondaryBgColor'}>{movie.title}</h3>
                              
          </div>
          </Fragment>
        )

      })}
      {trailer ? console.log : <TrailerMovies moviesTitle={movietitle}/>}
    <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightTheme'} fontSize={55} color="#fff" cursor={'pointer'}onClick={()=> setTrailer(true)}/>
      </div>
      </div>
    </Fragment>
  )
}

export default Movies