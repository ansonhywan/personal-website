import "./Resume.css";

import TextArea from "../components/TextArea/textarea";
import ListItem from "../components/ListItem/listitem";
import darwinai_icon from "../assets/darwinai_icon.jpeg";
import ph_icon from "../assets/ph_icon.png";
import flipp_icon from "../assets/flipp_icon.png";
import nova_icon from "../assets/nova_icon.jpeg";

export default function About() {
  return (
    <div className="Resume">
      <TextArea
        title={"Resume"}
        header={
          "I graduated with a degree in Computer Engineering from the University of Waterloo, where I developed a strong foundation in software development concepts. During my time there, I completed several internships in diverse fields such as AdTech, AI, and most recently HealthTech. These internships provided me with hands-on experience in software engineering and exposed me to various industry practices for  developing, maintaining, and testing production applications. Additionally, I gained valuable skills in agile processes and working in startup team-environments."
        }
      />
      <div className="ListItems">
        <ListItem
          img_src={ph_icon}
          img_alt={"ph_icon"}
          title={"Software Engineer Intern @ PocketHealth"}
          body={
            "● Added asynchronous TLS certificate renewal to microservices using Golang routines, eliminating service downtime \n● Addressed bugs within API endpoints and enhanced API response data to align with specified user story criteria \n● Restructured the logging format across several crucial microservices, improving development velocity \n● Led initiative to create infrastructure for testing interactions between microservices \n● Authored design documents and collaborated with various internal teams during software design processes \n● Gained proficiency in Azure and utilized cloud console and dashboards effectively \n● Led and participated in sprint planning, retrospectives, stand-ups, post-mortems, and other agile ceremonies"
          }
        />
        <ListItem
          img_src={darwinai_icon}
          img_alt={"darwinai_icon"}
          title={"Deep Learning Automation Developer @ DarwinAI"}
          body={"● Explored and fixed bugs within APIs, databases, and UI. Analyzed stack traces, docker logs, database data \n● Greatly increased automated test coverage for API endpoints, database validation, and UI flows for new features \n● Took leadership role in the automation of the Data Export and CSV Export epics that were demoed to key clients \n● Implemented barcode and QR code scanner utilizing OpenCV that automatically populated fields within UI \n● Created & presented SQL data generation script to help developers populate data to tables for quick and easy testing"}
        />
        <ListItem
          img_src={nova_icon}
          img_alt={"nova_icon"}
          title={"QA Software Developer @ Nova"}
          body={"● Increased automated test coverage for the Polar/Nova Web Hub using Python Selenium \n● Refactored UI tests to follow Page Object Model design pattern for more modular, organized code \n● Automated front-end UI, back-end database validation, client-side ad rendering, network traffic event collection \n● Utilized databases for manual and automated testing. Learned how to use database tools such as SequelPro"}
        />
        <ListItem
          img_src={flipp_icon}
          img_alt={"flipp_icon"}
          title={"Software Engineer in Test @ Flipp"}
          body={"● Increased automated test coverage for the Flipp Android App using Espresso, Mockito, and JUnit \n● Created Python script within CI/CD for targeted testing in pull requests, improving dev velocity while ensuring quality \n● Collaborated with software developers to create test plans, brainstorm edge cases, write unit and integration tests"}
        />
      </div>
    </div>
  );
}

