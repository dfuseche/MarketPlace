import React from "react";

function Filters(){

    return <div className="col-2">
        <h3>Filtros</h3>
        <h4>Categoría</h4>
        <input type="checkbox" name="electronicos"></input><label>Electronicos</label><br></br>
        <input type="checkbox" name="hogar"></input><label>Hogar</label><br></br>
        <input type="checkbox" name="moda"></input><label>Moda</label><br></br>
        <input type="checkbox" name="mascotas"></input><label>Mascotas</label><br></br>
        <input type="checkbox" name="deportes"></input><label>Deportes</label><br></br>
        <input type="checkbox" name="tecnologia"></input><label>Tecnología</label><br></br>
        <input type="checkbox" name="belleza"></input><label>Belleza</label><br></br>
        <input type="checkbox" name="salud"></input><label>Salud</label><br></br>
        <input type="checkbox" name="libros"></input><label>Libros</label><br></br>
        <h4>Precio</h4>
        <input type="number"placeholder="min"></input> 
        <input type="number"placeholder="máx"></input>
    </div>
}

export default Filters;