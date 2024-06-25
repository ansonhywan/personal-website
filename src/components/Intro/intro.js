import React from "react";
import "./intro.css";
import pic from "../../assets/anson_ugly_af.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="introGreeting"> Hello!</span>
        <span className="introText">
          I'm
          <span className="introName"> Anson</span>
        </span>
        <p className="introPara"> An aspiring Software Developer </p>
      </div>
      {/* <img src={pic} alt="ProfilePic" className='ProfilePic' /> */}
    </section>
  );
};

export default Intro;
