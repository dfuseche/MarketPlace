import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Filters from "./Filters";
function Catalogue (){

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(5);

    useEffect(()=> {
        const fetchProducts = async () => {
            setLoading(true);
            const res = await fetch("http://localhost:3000/api/products")
            .then((response)=> response.json())
            .then((data) => {
                return data;
            })
            setProducts(res);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    //Get current posts
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    function paginate (pageNumber) {
        return setCurrentPage(pageNumber);
    }   

    return <div>
        <h1>Catalogo</h1>
            <div className="row">
                <Filters />
                <div className="col-10">
                    <ProductCard products={currentProducts} loading = {loading}/>
                </div>
                
                
            </div>
            <div className="row">
            <div className ="col-2" >
            </div>
            <div className ="col-9" >
                <Pagination productsPerPage={productsPerPage} totalProducts = {products.length} paginate ={paginate} />
                </div>
            </div>
        
    </div>
}

export default Catalogue;