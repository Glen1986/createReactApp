import React, {useCallback} from 'react'
import { useLocation } from 'wouter'
import {useGifs} from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'

export default function Home() {
const [path, pushLocation] = useLocation()
const { loading, gifs } = useGifs()

const handleSubmit = useCallback(({keyword}) =>{
	pushLocation(`/search/${keyword}/`)
},[pushLocation])


return(
	<>
		<div clasName="App-main">
			<div className="App-results">
				<h3 className= 'App-title'>Ultima busqueda</h3>
			  <ListOfGifs gifs = {gifs}/>
			</div>
			<div className='App-Cateory'>
				<TrendingSearches />
		</div>
	</div>
	</>
)
}
