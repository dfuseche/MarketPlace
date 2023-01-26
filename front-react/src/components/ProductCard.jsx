import React from "react";


function ProductCard (props){

    if(props.loading) {
        return <h2>Loading ...</h2>
    }
    const style = {
        width: "20rem",
        height: "20rem"
    }
    return (<div className="row">       
            {props.products.map((product, index)=> (
                <div className="col-3">
                    <div keu ={index}className="card card-product" style={style}>
                        <img className="card-img-top" src="..." alt="Card image cap"></img>
                        <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <a href="#" class="btn btn-primary">{product.price}</a>
                        </div>
                    </div>
                </div>
            ))}
    </div>)
}

export default ProductCard;