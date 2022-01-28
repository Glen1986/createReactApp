import {useState, useEffect} from 'react'
import getGifs from '../services/getGifs'


export function useGifs({keyword}){
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    setLoading(true)
// recuperamos keyword de local.storage
   const keywordToUse = keyword ||localStorage.getItem('lastKeyword')
    getGifs({ keyword: keywordToUse})
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
//guardamos keyword en local.storage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword])
return {loading, gifs}
}
