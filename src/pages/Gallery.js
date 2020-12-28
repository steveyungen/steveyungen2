import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import { galleryImages } from "../content/images";

const photoStyle = {
  cursor: "pointer",
  marginTop: "10px",
  maxHeight: "400px",
  maxWidth: "100%"
};

class Gallery extends Component {
  render() {
    return (
      <div className="container gallery-container">
        {/* PHOTOS */}
        <div className="row row-style justify-content-center text-center">
          <p className="title large-title">PHOTOS</p>
          <p className="description">
            The pictures in this gallery are from different musical
            periods in my life. They’ve all had their fun times!
          </p>
          <div className="spacer" />
        </div>

        <div className="row justify-content-center text-center m-3">
          {Object.keys(galleryImages).map(image => (
            <div key={image} className="col-sm-8 col-md-4 col-xl-2">
              <Photo
                image={galleryImages[image].image}
                title={galleryImages[image].title}
                description={galleryImages[image].description}
                style={photoStyle}
                hasModal
                scrollableImages={galleryImages}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
