import React, {useContext} from "react"
import {ProductsContext} from "../Global/ProductsContext"
import {CartContext} from "../Global/CartContext"
import Banner from "./Banner"


const Products = () => {

    const {products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);
    return(
        <div className="container">
            <Banner />
        <div className="products">
    {products.map((products) => (

    <div className="product" kay={products.id}>
        
    <div className="product-image">
    <img src={products.image} alt="not found" />
    </div>

    <div className="product-details">
    <div className="product-name">
    {products.name}
    </div>

    <div className="product-price">
    ${products.price}.00
    </div>
    </div>

         <div className="add-to-cart" onClick={()=> dispatch ({type:
        'ADD_TO_CART', id: products.id, products})}>add to cart</div>


    {products.status === 'hot' ? <div className="hot">Hot</div> : ''}
    {products.status === 'new' ? <div className="new">New</div> : ''}

    </div>
))}
        </div>
         </div>     
    )
}

export default Products;