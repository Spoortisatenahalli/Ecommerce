import React from "react"





import netatmo from "../../assests/Web/Netatmo_rain.svg"
import smartwatch from "../../assests/Products/smart_watch.png"


import macMini from "../../assests/Products/New Apple Mac Mini.png"

import airpods2 from "../../assests/Products/airpods2.png"

export const ProductContext = React.createContext()

export default function ProductContextProvdier(props) {
  let products = [
  
   
    {
      title: "Apple iPhone 11",
      price: "499",
      rating: "4",
      // image: iPhone11,
      id: "3",
      category: "iPhone",
    },
 
    {
      title: "Apple iPad ",
      price: "499",
      // rating: "4",
      // image: iPad,
      id: "5",
      category: "iPad",
    },
    {
      title: "Apple Watch 21-1 ",
      price: "499",
      rating: "4",
      // image: watch,
      id: "6",
      category: "Accessories",
    },
    {
      title: "Apple iPod 2A",
      price: "499",
      rating: "4",
      // image: iPod,
      // id: "7",
      category: "iPod",
    },
   
    {
      title: "Netatmo Rain Gauge",
      price: "499",
      rating: "4",
      image: netatmo,
      id: "10",
      category: "Featured",
    },
    {
      title: "Apple Smartwatch 2",
      price: "499",
      rating: "4",
      image: smartwatch,
      id: "11",
      category: "Accessories",
    },

    // {
    //   title: "Apple Camera",
    //   price: "499",
    //   rating: "4",
    //   image: camera,
    //   id: "13",
    //   category: "Accessories",
    // },
    {
      title: "New Apple Mac Mini",
      price: "499",
      rating: "4",
      image: macMini,
      id: "14",
      category: "Accessories",
    },

    {
      title: "Apple Airpods Max",
      price: "499",
      rating: "4",
      image: airpods2,
      id: "16",
      category: "Accessories",
    },
  ]
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  )
}
