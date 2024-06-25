import Card from "../components/Card/card";
import TextArea from "../components/TextArea/textarea";
import "./Activities.css"
import bball from "../assets/basketball.png"
import golf from "../assets/birdie.png"
import run from "../assets/running.png"
import hiking from "../assets/hiking.png"
import gaming from "../assets/gaming.png"

export default function Activities() {
    return (
        <div className="Activities">
            <TextArea title={"Activities"}></TextArea>
            <div className="Cards">
                <Card img_src={bball} img_alt={"bball"} title={"Basketball"}></Card>
                <Card img_src={golf} img_alt={"golf"} title={"Golf"}></Card>
                <Card img_src={run} img_alt={"run"} title={"Running"}></Card>
                <Card img_src={hiking} img_alt={"hiking"} title={"Hiking"}></Card>
                <Card img_src={gaming} img_alt={"gaming"} title={"Gaming"}></Card>
            </div>
        </div>
    );
}