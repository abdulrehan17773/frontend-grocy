import React, { useEffect } from 'react'
import {productsService} from '../apis'

function Home() {

  useEffect(() => {
    ( async () => {
      let featured = true
      let page = 1
      const data = await productsService.getProducts({featured, page})
      console.log(data)
    })()
  }, [])

  return (
    <div>
      hy ji.....
    </div>
  )
}

export default Home
