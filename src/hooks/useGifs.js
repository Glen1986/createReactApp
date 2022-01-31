import {useState, useEffect, useContext} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({keyword}){
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)
// const [gifs, setGifs] = useState([])

  const keywordToUse = keyword ||localStorage.getItem('lastKeyword') || 'random'
  useEffect(function () {
    setLoading(true)
// recuperamos keyword de local.storage
    getGifs({ keyword: keywordToUse})
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
//guardamos keyword en local.storage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs])
   useEffect(()=>{
     if(page === INITIAL_PAGE ) return
getGifs({keyword:keywordToUse, page})
.then(nextGifs=>{
setGifs(prevGifs => prevGifs.concat(nextGifs)) 
})
},[page])
return {loading, loadingNextPage, gifs, setPage}
}
