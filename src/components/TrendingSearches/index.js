import React, {useState, useEffect, useRef} from 'react'
import getTrendingTerms from 'services/getTrendingTerms'
import Category from 'components/Category'

function TrendingSearches() {
	const [trends, setTrends] = useState([])

useEffect(function(){
  getTrendingTerms()
  .then(setTrends)
  },[])

return <Category name='Tendencias' options={trends}/>
}

export default function LazyTrendig (){
  const [ show, setShow ] = useState(false)
  const elementRef = useRef() 

    useEffect(() => {
    const onChange = (entries, observer) =>{
     const el = entries[0]
    if(el.isIntersecting === true){
    setShow(true)
      }
    }
    const observer = new IntersectionObserver(onChange, {
      'rootMargin':'100px' 
      })
      observer.observe(elementRef.current)
  },[])
  return <div ref={elementRef}>
    {show ? <TrendingSearches /> : null}
  </div>
}
