import "./Home.css"

import pic from "../assets/anson_ugly_af-circle.png";
import Intro from "../components/Intro/intro";
import TextArea from "../components/TextArea/textarea";

export default function Home () {
  return (
    <div className="Home">
      <Intro />
    </div>
  );
}

/* background-image: url(../assets/anson_ugly_af.png);
    background-attachment: fixed;
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 50%; */