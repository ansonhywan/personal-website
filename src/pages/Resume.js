import "./Resume.css"

import TextArea from "../components/TextArea/textarea";
import ListItem from "../components/ListItem/listitem";
import db from "../assets/database_icon.png";
import wdev from "../assets/web_dev_icon.png";

export default function About() {
  return (
    <div className="Resume">
      <TextArea
        title={"What I do"}
        header={
          "I graduated with a degree in Computer Engineering from the University of Waterloo, where I developed a strong foundation in software development concepts. During my time there, I completed several internships in diverse fields such as AdTech, AI, and most recently HealthTech. These internships provided me with hands-on experience in software engineering and exposed me to various industry practices for  developing, maintaining, and testing production applications. Additionally, I gained valuable skills in agile processes and working in startup team-environments."
        }
      />
      <div className="ListItems">
        <ListItem
          img_src={wdev}
          img_alt={"wdev"}
          title={"Front-end Development"}
          body={"testetsetstestsetstetsetstetetsetstetetsetstetetsetstetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetetsetstetstetetsetstetetsetstetetsetstetetsetstetetsetstee"}
        />
        <ListItem
          img_src={db}
          img_alt={"db"}
          title={"Back-end Development"}
          body={"testetsetstestsetseererer"}
        />
      </div>
    </div>
  );
}
