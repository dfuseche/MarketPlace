import React from "react";
import { useForm } from "../hooks/useForm";

function Navbar(){


    const [searchBarText, setSearchBarText] = useForm({
        texto: ""
    })
    function handleSearch (){
        
    }

    const styleNav = {
        backgroundColor: "#0CDE6D"
    }
    function handleLogOut(){
        
    }

    return <div className="carouselHome">
        <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light navbar-color" style={styleNav}>
        <a className="navbar-brand navbar-title" href="/home">FASTMARKET</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            
            <div className="navbar-nav ml-auto">
            <input className="search-bar form-control mr-sm-4" type="search" name="texto" onChange={setSearchBarText} placeholder="Search" aria-label="Search"></input>
            <button className="btn search-button btn-light btn-outline-success my-2 my-sm-0"  href="/home">Buscar</button>
            <a className="nav-item nav-link" href="/home">Home </a>
            
            <a className="nav-item nav-link " href="/signin" tabIndex="-1" aria-disabled="true">Iniciar sesión</a>
            <a className="nav-item nav-link " onClick={handleLogOut} href="/" tabIndex="-1" aria-disabled="true">Cerrar sesión</a>
            </div>
        </div>
        </nav>
    </div>
}

export default Navbar;