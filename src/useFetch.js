import React from 'react'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] =useState(null)
    const [ispending, setIspending] = useState(true)
    const [error, setError] = useState(null)

    const abortCont = new AbortController()

    useEffect(() => {
      fetch(url, {signal: abortCont.signal})
      .then(res => {
          if (res.ok) {
              return res.json()
          } else {
              throw Error('error, could not fetch data')
          }
      })
      .then(data => {
          setData(data)
          setIspending(false)
          setError(null)
        })
      .catch(err => {
          setError(err.message)
          setIspending(false)
        })
        return () => abortCont.abort()
  },[])

  return {ispending, error, data}
}

export default useFetch
