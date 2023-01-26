import React from "react";

function Categories(){
    
    return <div>
        <a className="dropdown">
                <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Electronicos</a>
                    <a className="dropdown-item" href="#">Hogar</a>
                    <a className="dropdown-item" href="#">Moda</a>
                    <a className="dropdown-item" href="#">Mascotas</a>
                    <a className="dropdown-item" href="#">Deportes</a>
                    <a className="dropdown-item" href="#">Tecnología</a>
                    <a className="dropdown-item" href="#">Belleza</a>
                    <a className="dropdown-item" href="#">Salud</a>
                    <a className="dropdown-item" href="#">Libros</a>
                </div>
        </a>
    </div>
}

export default Categories;