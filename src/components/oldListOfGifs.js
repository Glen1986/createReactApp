import React, {useEffect, useState} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'
import ClipLoader from "react-spinners/ClipLoader";

export default function ListOfGifs({params}) {

	const [loading, setLoading] = useState(false)
	const [gifs, setGifs] = useState([])
	const {keyword} = params
		useEffect(() => {
		setLoading(true)
		getGifs({keyword})
		.then(gifs => {
			setGifs(gifs)
			setLoading(false)
})
	},[keyword])

if (loading) return <i>cargando</i> 

return <>
{
gifs.map(({id, title, url}) => 
          <Gif
          key = {id}
          id = {id}
          title = {title}
          url = {url}
         />
         )

}
</>

}
