import React, { useEffect, useState } from 'react'
import { getOneProduct, relatedProducts } from './ApiCore'
import { addToCart } from './../actions/cartActions'
import ShowImage from './ShowImage'
import { useDispatch } from 'react-redux'
import Footer from './Footer'

const Product = (props) => {

    const [product, setProduct] = useState({})
    const [, setRelated] = useState([])
    let dispatch = useDispatch() 
    useEffect(() => {
        let productId = props.match.params.id;
        getOneProduct(productId)
          .then(res => {
              setProduct(res)
               return relatedProducts(productId)
            })
           .then(related => setRelated(related))
          .catch(err => console.error(err))

    }, [props])

    return (
        <>
        <div className='container my-5 py-3 text-black'>  
        <p className='mt-5 text-white'>sdf</p>
           {product && product.description && (
                
                <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <ShowImage item={product} url="product/photo" height="400px"></ShowImage>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product.name}</h1>
                    <hr />
                    <h2 className="my-4">${product.price}</h2>
                    <p className="lead"><strong>{product.description}</strong></p>
                    { product.quantity > 0 && (
                    <button onClick={() => dispatch(addToCart(product))} className="btn btn-raised btn-danger my-5">Add to Cart</button>
                  ) }
                </div>
            </div>

               
           )}
        </div>
        <Footer/>
        </>
    )
}

export default Product
