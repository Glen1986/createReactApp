import {useState, useEffect, useContext} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'


export function useGifs({keyword}){
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)
// const [gifs, setGifs] = useState([])

  useEffect(function () {
    setLoading(true)
// recuperamos keyword de local.storage
   const keywordToUse = keyword ||localStorage.getItem('lastKeyword') || 'random'
    getGifs({ keyword: keywordToUse})
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
//guardamos keyword en local.storage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs])
return {loading, gifs}
}
