import React, {createContext, useState} from "react" 

import dslr from  "../assets/dslr.jpg"
import headphone from  "../assets/headphones.jpg"
import iphone from  "../assets/iphone.jpg"
import microphone from  "../assets/microphone.jpg"
import perfume from  "../assets/perfume.jpg"
import rings from  "../assets/rings.jpg"
import shoes from  "../assets/shoes.jpg"
import watch from  "../assets/watch.jpg"

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([

        {id:1, name: 'Dslr', price: '300', image: dslr, status: 'hot'},
        {id:2, name: 'Head Phones', price: '30', image: headphone, status: 'new'},
        {id:3, name: 'I phone', price: '400', image: iphone, status: 'new'},
        {id:4, name: 'Micro Phone', price: '200', image: microphone, status: 'hot'},
        {id:5, name: 'Perfume', price: '40', image: perfume, status: 'new'},
        {id:6, name: 'Rings', price: '100', image: rings, status: 'hot'},
        {id:7, name: 'Shoes', price: '80', image: shoes, status: 'new'},
        {id:7, name: 'watch', price: '120', image: watch, status: 'hot'}
        ]);

    return(
 <ProductsContext.Provider value={{products: [...products]}}>
     {props.children}
 </ProductsContext.Provider>
    )

}

export default ProductsContextProvider;