import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../assets/hero_banner.jpg";
import title from "../../assets/hero_title.png";
import play from "../../assets/play_icon.png";
import info from "../../assets/info_icon.png";
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="hero">
        <img src={Hero} alt="" className="banner-img" />
        <div className="hero_caption">
          <img src={title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in morden Istanbul embarks on a quest to save the city from an
            immortal enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info} alt="" />
              More Info
            </button>
          </div>
          <Cards />
        </div>
      </div>
      <div className="more-cards">
        <Cards title={"Blockbuster Movies"} category={"top_rated"} />
        <Cards title={"Only on Netflix"} category={"now_playing"} />
        <Cards title={"Upcoming"} category={"upcoming"} />
        <Cards title={"Top Pics for You"} category={"popular"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
