import React from 'react'
import image1 from "../Components/assets/GalleryImages/image1.jpg"
import image2 from "../Components/assets/GalleryImages/image2.jpeg"
import image3 from "../Components/assets/GalleryImages/image3.jpeg"
import image4 from "../Components/assets/GalleryImages/image4.jpeg"
import image5 from "../Components/assets/GalleryImages/image5.jpeg"
import image6 from "../Components/assets/GalleryImages/image6.jpeg"
import image7 from "../Components/assets/GalleryImages/image7.jpeg"
import image8 from "../Components/assets/GalleryImages/image8.jpeg"
import image9 from "../Components/assets/GalleryImages/image9.jpeg"

import "./Gallery.css"

const Gallery = () => {
  return (
    <div  id="wrapper">

      <div class="container">
        <h1 className=' text-blue-200'>Our Events</h1>

        <div class="gallery">

          <figure class="card">
            <img src={image1} alt="" />
            <figcaption>This is Event Discription of this Event which show our grand Success of event</figcaption>
          </figure>

          <figure class="card">
            <img src={image2} alt="" />
            <figcaption>image2</figcaption>
          </figure>

          <figure class="card">
            <img src={image3} alt="" />
            <figcaption>image3</figcaption>
          </figure>

          <figure class="card">
            <img src={image4} alt="" />
            <figcaption>image4</figcaption>
          </figure>

          <figure class="card">
            <img src={image5} alt="" />
            <figcaption>image5</figcaption>
          </figure>

          <figure class="card">
            <img src={image6} alt="" />
            <figcaption>image6</figcaption>
          </figure>

          <figure class="card">
            <img src={image7} alt="" />
            <figcaption>image7</figcaption>
          </figure>

          <figure class="card">
            <img src={image8} alt="" />
            <figcaption>image8</figcaption>
          </figure>

          <figure class="card">
            <img src={image9} alt="" />
            <figcaption>image9</figcaption>
          </figure>

        </div>
      </div>
    </div>
  )
}

export default Gallery
