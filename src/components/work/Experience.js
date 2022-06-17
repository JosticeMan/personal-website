import React, { Component } from 'react';
import '../../css/work/Experience.css';
import Typing from 'react-typing-animation';
import {WorkBlock} from "./WorkBlock";
import {Projects} from "./Projects";
import {Row} from "react-bootstrap";

export class Experience extends Component {
    render() {
        let experiences = [{ 'companyName': 'Google',
            'companyLocation': 'New York, NY',
            'companyDescription': 'A multinational technology company with focuses in AI, search, cloud computing, and more.',
            'companyRole': 'Software Engineer',
            'workTime': '6/2022 - Present',
            'companyResponsibilities': [

            ]},
            { 'companyName': 'Amazon',
            'companyLocation': 'New York, NY',
            'companyDescription': 'A multinational company focusing on e-commerce, cloud-computing, digital streaming, and artificial intelligence.',
            'companyRole': 'Software Development Engineer I Intern',
            'workTime': '5/2021 - 7/2021',
            'companyResponsibilities': [
                "Product Knowledge Team",
                "Owned, designed, developed and deployed an project to production in a 12-week timespan",
                "Presented project deployment and features to shareholders",
                "Communicated across my own team and multiple external teams to ensure project impact",
                "Code reviewed coworkers to ensure code quality and security",
                "Assisted other interns with codebase that my team owned",
                "Maintained and updated existing projects",
                "Monitored and unblocked pipelines"
            ]},
            { 'companyName': 'makeithappen',
            'companyLocation': 'New York, NY',
            'companyDescription': 'A small software services company providing web development services.',
            'companyRole': 'Junior Software Engineer',
            'workTime': '10/2019 – 12/2020',
            'companyResponsibilities':
                ["Led the development for an e-commerce site for course enrollment that is now in production and used by thousands of users daily.",
                 "Developed multiple applications concurrently within the client-tier, server-tier, and databases in addition to DevOps.",
                 "Collaborated with a small group to deliver high energy applications to be utilized by thousands.",
                 "Wrote scripts to automate the transfer of data and sync databases between regional servers.",
                 "Designed and consumed REST APIs and Databases.",
                 "Almost developed an e-commerce site from scratch and deployed it to production individually.",
                 "Communicated with clients about project requirements and the current state of development.",
                 "Interviewed and assess programmers to join the company.",
                 "Utilized a variety of technologies including C#, Node.js, Express, HTML/CSS/JavaScript, VisualStudio, PostgreSQL, React, Redux, Typescript, Azure, Ruby on Rails, Azure, Perl, Django, Python, Docker, React Native, Perl, and Selenium."]},
            { 'companyName': 'Pension Trust Solutions',
                'companyLocation': 'New York, NY',
                'companyDescription': 'A New York City-based financial planner offering assistance in pension plans & trust.',
                'companyRole': 'Web Developer Intern',
                'workTime': '4 months',
                'companyResponsibilities': ["Increased company’s digital footprint significantly by developing and deploying a website using ReactJS/Express in addition to reaching out on social media platforms.",
                                            "Increased client base by compiling and contacting potential clients that may be interested in setting up a pension plan.",
                                            "Reduced client file access time to a few seconds by uploading and organizing documents onto a centralized network server.",
                                            "Maintained a clean, safe work environment and a positive attitude."]}
        ];

        let projects = [{"projectName": "IIL", "projectLink": "https://search.iil.com/search/", "projectImage": "iil"},
            {"projectName": "WGAE", "projectLink": "https://www.wgaeast.org/", "projectImage": "wgae"},
            {"projectName": "JVB Health Wellness", "projectLink": "http://www.jvbwellness.com/", "projectImage": "jvb"},
            {"projectName": "Singularity AI", "projectLink": "https://singularity.ai/", "projectImage": "singularity"},
            {"projectName": "The Orange", "projectLink": "https://github.com/jzaia18/DandyHacks2018", "projectImage": "theorange"},
            {"projectName": "BeatBot", "projectLink": "https://github.com/JosticeMan/BeatBot", "projectImage": "beatbot"},
            {"projectName": "Arrakeen Run", "projectLink": "https://github.com/JosticeMan/ArrakeenRun", "projectImage": "arrakeenrun"},
            {"projectName": "RShuttle", "projectLink": "https://devpost.com/software/rshuttle", "projectImage": "rshuttle"},
            {"projectName": "Battlemetrics Bot", "projectLink": "https://github.com/JosticeMan/BattlemetricsBot", "projectImage": "battlemetricsbot"},
            {"projectName": "TextSummary", "projectLink": "https://github.com/JosticeMan/TextSummary", "projectImage": "textsummary"},
            {"projectName": "DiscordSudo", "projectLink": "https://github.com/JosticeMan/DiscordSudo", "projectImage": "discordsudo"},
            {"projectName": "leTab", "projectLink": "", "projectImage": "leTab", "projectDescription": "Chrome Tab Manager Extension"},];

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
