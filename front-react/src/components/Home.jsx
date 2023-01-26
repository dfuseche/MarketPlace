import React from "react";
import Carousel from "./Carousel";
function Home(){
    return <div className="home">
        <h1>Home</h1>
        <Carousel />
        <h1>Categorias</h1>
        <div className="row">
            <div className=" col-1">
            </div>
            <div className="col-2">
                <div className="circles">
                    <img src="./img/electrodomesticos.png" alt="image" />
                </div>               
            </div>
            <div className="col-2">
                <div className="circles">
                    <img src="./img/hogar.png" alt="image" />
                </div>               
            </div>
            <div className="col-2">
                <div className="circles">
                    <img src="./img/moda.png" alt="image" />
                </div>               
            </div>
            <div className="col-2">
                <div className="circles">
                    <img src="./img/mascotas.png" alt="image" />
                </div>               
            </div>
            <div className="col-2">
                <div className="circles">
                    <img src="./img/deportes.png" alt="image" />
                </div>               
            </div>
            <div className=" col-1">
            </div>
        </div>

        <div className="row second-row">
            <div className=" col-2">
            </div>
            <div className="col-2">
                <div className=" circles">
                    <img src="./img/tecnologia.png" alt="image" />
                </div>               
            </div>
            <div className="col-2">
                <div className=" circles">
                    <img src="./img/belleza.png" alt="image" />
                </div>               
            </div>
            <div className=" col-2">
                <div className=" circles">
                    <img src="./img/salud.png" alt="image" />
                </div>               
            </div>
            <div className=" col-2">
                <div className=" circles">
                    <img classname="libros"src="./img/libros.png" alt="image" />
                </div>               
            </div>
        </div>
        
    </div>

}

export default Home;