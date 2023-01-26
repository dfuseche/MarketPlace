import React from "react";

function Carousel(){
    return <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://m.media-amazon.com/images/S/aplus-media/vc/6158d424-0e7c-498b-89f6-fc280931a1f1.__CR0,0,800,600_PT0_SX800_V1___.jpg" alt="First slide"></img>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://images.autods.com/OfficialSite/New/20201103091044/The-Best-10-Trending-Tech-Gadgets-Dropshipping-Products-To-Sell-in-2021.png" alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://www.axial.net/wp-content/uploads/2017/12/pets.png" alt="Third slide"></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>;
}

export default Carousel;