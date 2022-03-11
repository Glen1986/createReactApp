import {useState, useEffect, useContext} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({keyword} = { keyword: null }){
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)
// const [gifs, setGifs] = useState([])

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

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
  }, [keyword,keywordToUse, setGifs])

   useEffect(()=>{
     if(page === INITIAL_PAGE ) return
      setLoadingNextPage(true)
      getGifs({keyword: keywordToUse, page})
      .then(nextGifs=>{
      setGifs(prevGifs => prevGifs.concat(nextGifs)) 
      setLoadingNextPage(false)
})

},[setGifs, keywordToUse, page])
return {loading, loadingNextPage, gifs, setPage}

}
