import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import { useSelector } from "react-redux";

const ProductDetails = () => {
    const product = useSelector((state) =>state.product);
    const {image, tittle, price, category, description} = product ;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductsDetails = async() => {
        const response = await axios
        .get (`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log('Err',err);
        });
        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if(productId && productId !== ''){
            fetchProductsDetails(productId);
        }
    }, [productId]);
    return (
        <div className="ui grid container">
      {Object.keys(product).lenght === 0 ? (
         <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">AND</div>
                <div className="middle aligned row">
                  <div className="column lp">
                      <img className="ui fluid image testImage" src={image} />
                  </div>
                  <div className="column rp">
                    <h1>{tittle}</h1>
                    <h2>
                        <a className="ui teal tag label">${price}</a>
                    </h2>
                    <h3 className="ui brown block header">{category}</h3>
                    <p>{description}</p>
                    <div className="ui vertical animated button" tabIndex= "0">
                        <div className="hidden content">
                            <i className="visible content">Add to Cart</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
      )} 
    </div>  


    );
};

export default ProductDetails;