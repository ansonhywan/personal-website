import React from "react";
import "./intro.css";
import pic from "../../assets/anson_ugly_af-circle.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="introGreeting"> Hello!</span>
        <span className="introText">
          I'm
          <span className="introName">
            {" "}
            Anson <img src={pic} alt="ProfilePic" className="ProfilePic" />
          </span>
        </span>
        <p className="introPara"> An aspiring Software Developer </p>
      </div>
    </section>
  );
};

export default Intro;
