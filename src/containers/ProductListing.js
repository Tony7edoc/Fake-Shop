import React, {useEffect} from "react";
import axios from "axios";
import { setProducts } from '../redux/actions/productActions';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProductComponenet from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector(state => state);
    const dispatch = useDispatch()
    console.log('Products', products);

    const fetchProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log('Err',err);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(() =>{
        fetchProducts();
    }, []);
    return (
        <div className= 'ui grid container'>
            <ProductComponenet/>
        </div>
    );
};

export default ProductListing;