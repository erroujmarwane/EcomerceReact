import React from 'react';
import img1 from '../assets/images/home/img1.jpg'
import img2 from '../assets/images/home/img2.jpg'
import img3 from '../assets/images/home/img3.jpg'
import img4 from '../assets/images/home/img4.jpg'
function Carousel() {
  return <div>
      <div>
            <div id="carouselExampleIndicators" class="carousel" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner" style={{ height: "720px" }}>
                    <div class="carousel-item active" >
                        <img src={img1} class="d-block w-100 img-fluid center-block" alt="IPhone" />
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100 img-fluid" alt="IPhone" />
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100 img-fluid" alt="IPhone" />
                    </div>
                    <div class="carousel-item">
                        <img src={img4} class="d-block w-100 img-fluid" alt="IPhone" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            
        </div>
  </div>;
}

export default Carousel;