import React, { useEffect } from 'react'
import {ordersService} from '../apis'

function Home() {

  useEffect(() => {
    ( async () => {
      const orderData = {
        address: "muhallah babu gulab, gujar khan ",
        phone: "03441141506",
        area_id: "67963c73e2abc36d249835a9",
        note: "",
        delivered_charges: "10",
        total_price: "2100",
        cart: [ 
          { "pro_id": "679a43d4e4904e6ee58976bf", "qty": 2 },
          { "pro_id": "679a4405e4904e6ee58976cd", "qty": 4 },
          { "pro_id": "679a44a2e4904e6ee58976ef", "qty": 1 }
        ]
      }
      
      const data = await ordersService.placeOrder(orderData)
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
