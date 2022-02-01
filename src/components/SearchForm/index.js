import React, { useState } from 'react'

export default function SearchForm ({onSubmit}) {

const [keyword, setKeyword] = useState('')

const handleSubmit = event => {
	event.preventDefault()
	onSubmit({keyword})
}
const handleChange = (event) =>{
	setKeyword(event.target.value)
}


	return (
		<>
	   <form onSubmit={handleSubmit}>
			 <button>Buscar</button>
       <input placeholder="search Gif.." onChange={handleChange} value={keyword} type="text"/>
     </form>
		
		</>
	);
};
