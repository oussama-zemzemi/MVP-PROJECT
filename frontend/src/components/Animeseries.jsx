import axios from 'axios'
import React, { Fragment, useEffect, useContext, useState } from 'react'
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai'
import { Container } from './Navbar'
import '../Styles/Videos.css'
import NoImg from './Noimage.jpg'

const Animeseries = () => {
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const [showData, setShowData] = useState([])
  const [trailer,setTrailer] = useState(true)
  const [title, setTitle] = useState('')
  const Shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`
  const Images ="https://image.tmdb.org/t/p/w500"
  const TvShows = async () =>{
    const data = await axios.get(Api, {
      params: {
        api_key: `1cf50e6248dc270629e802686245c2c8`,
        query:input
      }
    })
    const results = (data.data.results)
    setShowData(results)

  }
  useEffect(()=>{
    setTimeout(()=>{
    TvShows()
    },100)
  },[input])
  console.log(showData)
  const TvShowTitle = (shows) =>{
    setTitle(shows.name)
    setTrailer(!trailer)

  }
  return(
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className="movies-container">
      {showData.map((shows)=>{
        return(
          <Fragment key={shows.id}>
            <div id={trailer ? 'container' : 'NoContainer'}>
              
          <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={()=> TvShowTitle(shows)}/>
          <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImg} alt='' onClick={()=> TvShowTitle(shows)} />
          <h3 id={shows.name.length> 28 ? 'smaller-Text' : ""} className={toggle ? 'mainColor' : 'secondaryBgColor'}>{shows.name}</h3>
            </div>
          </Fragment>
        )
      })}
       
      <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightTheme'} fontSize={55} color="#fff" cursor={'pointer'}onClick={()=> setTrailer(true)}/>
      </div>
      </div>
    </Fragment>
  )
}

export default Animeseries