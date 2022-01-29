import React, {useContext} from 'react'
import StaticContext from '../../context/StaticContext'
import GifsContext from '../../context/GifsContext'
import Gif from '../../components/Gif'

export default function Detail({params}){
 const staticConfig =	useContext(StaticContext)
	console.log(staticConfig)

  const {gifs} = useContext(GifsContext)
  const gif = gifs.find(singleGif => 
  singleGif.id === params.id
)

//	return <h1>Gif con id: {params.id}</h1>
  return <Gif {...gif}/>
}
