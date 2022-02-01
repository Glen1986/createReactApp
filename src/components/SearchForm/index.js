import React, {useState} from 'react'

function SearchForm({ handleSubmit: handleSubmitFromParent }){
const [keyword, setKeyword] = useState('')

const handleSubmit = event => {
	event.preventDefault()
//	onSubmit({keyword})
//  pushLocation(`/search/${keyword}`)
  handleSubmitFromParent({keyword})
}

const handleChange = event =>{
	setKeyword(event.target.value)
}
return (
	<form  onSubmit={handleSubmit}>
		<button>Buscar</button>
		<input placeholder="search a Gif..." value={keyword} onChange={handleChange} type="text"/>
	</form>
	)
}
 export default React.memo(SearchForm)
