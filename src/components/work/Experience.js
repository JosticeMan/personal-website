import React, { Component } from 'react';
import '../../css/work/Experience.css';
import Typing from 'react-typing-animation';
import {WorkBlock} from "./WorkBlock";
import {Projects} from "./Projects";
import {Row} from "react-bootstrap";

export class Experience extends Component {
    render() {
        let experiences = [{ 'companyName': 'makeithappen',
            'companyLocation': 'New York, NY',
            'companyDescription': 'A small software services company providing web development services.',
            'companyRole': 'Junior Software Engineer',
            'workTime': '10/2019 – Present',
            'companyResponsibilities':
                ["Develop multiple applications concurrently within the client-tier, server-tier, and databases in addition to DevOps.",
                 "Collaborating with a small group to deliver high energy applications to be utilized by thousands.",
                 "Writing scripts to automate the transfer of data and sync databases between regional servers.",
                 "Designing and consuming REST APIs and Databases.",
                 "Communicating with clients about project requirements and the current state of development.",
                 "Interviewing and assessing programmers to join the company.",
                 "Utilized a variety of technologies including C#, Node.js, Express, HTML/CSS/JavaScript, VisualStudio, PostgreSQL, React, Redux, Typescript, Azure, Ruby on Rails, Azure, Perl, Django, Python, Docker, React Native, Perl, and Selenium."]},
            { 'companyName': 'Pension Trust Solutions',
                'companyLocation': 'New York, NY',
                'companyDescription': 'A New York City-based financial planner offering assistance in pension plans & trust.',
                'companyRole': 'Web Developer Intern',
                'workTime': '4 months',
                'companyResponsibilities': ["Increased company’s digital footprint significantly by developing and deploying a website using ReactJS/Express in addition to reaching out on social media platforms.",
                                            "Increased client base by compiling and contacting potential clients that may be interested in setting up a pension plan.",
                                            "Reduced client file access time to a few seconds by uploading and organizing documents onto a centralized network server.",
                                            "Maintaining a clean, safe work environment and a positive attitude."]}
        ];

        let projects = [{"projectName": "The Orange", "projectLink": "https://github.com/jzaia18/DandyHacks2018", "projectImage": "theorange"},
            {"projectName": "BeatBot", "projectLink": "https://justinyau.me/BeatBot/", "projectImage": "beatbot"},
            {"projectName": "Arrakeen Run", "projectLink": "https://github.com/JosticeMan/ArrakeenRun", "projectImage": "arrakeenrun"},
            {"projectName": "RShuttle", "projectLink": "https://devpost.com/software/rshuttle", "projectImage": "rshuttle"},
            {"projectName": "Battlemetrics Bot", "projectLink": "https://github.com/JosticeMan/BattlemetricsBot", "projectImage": "battlemetricsbot"},
            {"projectName": "TextSummary", "projectLink": "https://github.com/JosticeMan/TextSummary", "projectImage": "textsummary"},
            {"projectName": "DiscordSudo", "projectLink": "https://github.com/JosticeMan/DiscordSudo", "projectImage": "discordsudo"},
            {"projectName": "leTab", "projectLink": "", "projectImage": "leTab", "projectDescription": "Chrome Tab Manager Extension"}];

        return (
            <div className="experience-outer-container">
                <div className="experience-container container">
                    <Typing speed={50} className="typing-text">
                        Professional Experience
                    </Typing>
                    <hr />
                    {experiences.map((item, ind) =>
                        <WorkBlock key={"work-block-" + ind} companyName={item.companyName}
                            companyDescription={item.companyDescription} companyRole={item.companyRole} companyLocation={item.companyLocation}
                            companyResponsibilities={item.companyResponsibilities} workTime={item.workTime}
                        />)}
                    <Typing speed={50} className="typing-text">
                        Public Projects
                    </Typing>
                    <hr />
                    <Row className="work-experience-project-container">
                        {projects.map((item, ind) => <Projects key={"project-experience-" + ind} projectName={item.projectName}
                        projectLink={item.projectLink} projectImage={item.projectImage} projectDescription={item.projectDescription}/>)}
                    </Row>
                </div>
            </div>
        );
    }
}
