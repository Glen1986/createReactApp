import React from 'react'
import { Link } from 'wouter'

const POPULAR_GIFS = ['matrix', 'chile', 'canabbis', 'chuck shuldinner']
export default function Home(){
return(
<>
<h3 className= 'App-title'>los Gif mas populares</h3>
<ul>
	{POPULAR_GIFS.map((popularGif) => (
	<li key = {popularGif}>
		<Link to={`/search/${popularGif}`}>Gifs de ${popularGif}</Link>
	</li>
))}
</ul>
</>
)
}
