import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import {useGifs} from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import './home.css'

export default function Home() {
const [keyword, setKeyword] = useState('')
const [path, pushLocation] = useLocation()

const { loading, gifs } = useGifs({keyword})

const handleSubmit = (event) =>{
event.preventDefault()
	console.log(keyword)
	pushLocation(`/search/${keyword}/`)
}
const handleInput = (event) =>{
	setKeyword(event.target.value)
}

return(
	<>
		<h3 className= 'App-title'>los Gif mas populares</h3>
     <form onSubmit={handleSubmit}>
       <input onChange={handleInput} value={keyword} type="text"/>
			 <input type="submit" value="buscar"/>
     </form>
		 <div className="lista">
			  <ListOfGifs gifs = {gifs}/>
		 </div>
		<div className='App-Cateory'>
			<TrendingSearches />
		</div>
	</>
)
}
