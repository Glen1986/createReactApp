import React from 'react'
import Gif from 'components/Gif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spinner'
import {Redirect} from 'wouter'
import useSEO from 'hooks/useSEO'
export default function Detail({params}){
const {gif, isLoading, isError} = useSingleGif({id: params.id})
const title = gif ? gif.title : ''
useSEO({description: `Detail of ${title}`, title})
console.log({gif})

  useSEO(`${title} ||' Giffy'`)
  useSEO({title} )
  if(isLoading)return <Spinner/>
  if(isError)return <Redirect to='/404'/>
  if(!gif) return null
  return<>
      <h3 className="App-title"> {params.title}</h3>
      <Gif {...gif}/>
  </> 
}
