import { useState } from "react";
const Content = () => {
  return (
    <main className="main container">
      <div className="main-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
          YUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES
        </p>
        <div className="main-btn">
          <button> Shop Now</button>
          <button className="sec-btn">Catagory</button>
        </div>
        <div className="icons">
          <p>also avalable on</p>
          <div className="icons-img">
            <img src="../../public/images/amazon.png" alt="amazon " />
            <img src=". ./../public/images/flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>

      <div className="main-image">
        <img src="../../public/images/shoe_image.png" alt="shoe image" />
      </div>
    </main>
  );
};

export default Content;
