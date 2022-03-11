
import React, { useCallback} from "react"
import { useLocation } from "wouter"

import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'

import SearchForm from 'components/SearchForm'
import Spinner from "components/Spinner"


export default function Home() {
  const [ pushLocation] = useLocation()
  const {loading, gifs} = useGifs()

const handleSubmit = useCallback(({keyword}) => {
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])
  return (
    <>
<SearchForm onSubmit={handleSubmit}/>
     <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Ultima Busqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          {loading
          ?  <Spinner/> 
          :  <TrendingSearches />
          }
          
        </div>
      </div>
    </>
  )
}
