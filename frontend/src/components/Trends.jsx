import React,{Fragment, useEffect, useState, useContext} from 'react'
import { Container } from './Navbar'
import axios from 'axios'
import {AiOutlineClose, AiFillPlayCircle} from 'react-icons/ai'
import NoImg from './Noimage.jpg'
import '../Styles/Videos.css'

const Trends = () => {
  const {toggle} = useContext(Container)
  const Api =`https://api.themoviedb.org/3/`
  const Images ="https://image.tmdb.org/t/p/w500"
  const TrendsShown = '/trending/all/week'
  const [trendArray, setTrendArray] = useState([])
  const [trendTitle, setTrendTitle] = useState('')
  const [trailer,setTrailer] = useState(true)

  const Trends = async()=>{
    const data = await axios.get(`${Api}${TrendsShown}`,{
      params: {
        api_key:'1cf50e6248dc270629e802686245c2c8',
        
      }
    })
    const results = data.data.results
    setTrendArray(results)
  }
  useEffect(()=>{
    setTimeout(()=>{
      Trends()
    }, 100)
  },[])
  const TrendTitle = (trend) =>{
    setTrendTitle(trend.title)
    setTrailer(!trailer)

  }
  
  return (
    <Fragment>
      <div className={toggle? "mainBgColor" : 'secondaryBgColor'}>
      <div className="movies-container">
        {trendArray.map((trend)=>{
          return(
            <Fragment>
            <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? "playIcon" : 'hide'} onClick={()=> TrendTitle(trend)}/>
              <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImg} alt='' onClick={()=> TrendTitle(trend)} />
              <h3 id='smaller-Text' className={toggle ? 'mainColor' : 'secondaryBgColor'}>{trend.title}</h3>
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

export default Trends