import "./Home.css"

import pic from "../assets/anson_ugly_af.png";
import Intro from "../components/Intro/intro";
import TextArea from "../components/TextArea/textarea";

export default function Home () {
  return (
    <div className="Home">
      <Intro />
      <TextArea title={"What I do"} header={"testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"}></TextArea>
    </div>
  );
}

/* background-image: url(../assets/anson_ugly_af.png);
    background-attachment: fixed;
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 50%; */