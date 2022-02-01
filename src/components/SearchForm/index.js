import React, { useState } from 'react'

export default SearchForm = ({handleSubmit}) => {
const [keyword, setKeyword] = useState('')

	return (
		<>
	     <form onSubmit={handleSubmit}>
       <input onChange={handleInput} value={keyword} type="text"/>
			 <input type="submit" value="buscar"/>
     </form>
		
		</>
	);
};
