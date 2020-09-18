import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="5"
            title="The Lean Startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"
            rating={5}
          />
          <Product
            id="6"
            title="Remote"
            price={100}
            image="https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_UL320_SR320,320_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="1"
            title="Music Player"
            price={200}
            image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Kitchen"
            price={89.9}
            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kitchen-appliances-on-amazon-1560446818.jpg?crop=0.492xw:0.984xh;0.269xw,0&resize=640:*"
            rating={3}
          />
          <Product
            id="3"
            title="Egg Boiling Machine"
            price={20.99}
            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-best-sellers-1550869253.jpg?crop=0.498xw:0.997xh;0,0.00321xh&resize=640:*"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="4"
            title="Iphone 11"
            price={999}
            image="https://images-na.ssl-images-amazon.com/images/I/61FAlH3md%2BL._AC_SX569_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
