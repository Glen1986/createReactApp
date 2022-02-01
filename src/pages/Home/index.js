import React, { useState } from 'react'
import {  useLocation } from 'wouter'
import {useGifs} from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import './home.css'
import SearchForm from 'components/SearchForm'

export default function Home() {
const [keyword, setKeyword] = useState('')
const [path, pushLocation] = useLocation()

const { loading, gifs } = useGifs({keyword})

const handleSubmit = ({keyword}) =>{
	pushLocation(`/search/${keyword}/`)
}
return(
	<>
<SearchForm onSubmit={handleSubmit}/>
		<h3 className= 'App-title'>los Gif mas populares</h3>
		 <div className="lista">
			  <ListOfGifs gifs = {gifs}/>
		 </div>
	<div className='App-Cateory'>
		<TrendingSearches />
	</div>
	</>
)
}
