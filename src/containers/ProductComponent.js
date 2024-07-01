import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponenet = () => {
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map((product) =>{
        const {id,tittle,image,price,category} = product;
        return(
            <div className="four wide column" key= {id}>
                <Link to={`/product/${id}`}>
            <div className= 'ui link cards'>
                <div className="card">
                    <div className="image">
                        <img src = {image} alt={tittle}></img>
                    </div>
                    <div className="content">
                        <div className="header">{tittle}</div>
                        <div className="meta price">${price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>

        )
    })
    return <>{renderList}</>
};

export default ProductComponenet;