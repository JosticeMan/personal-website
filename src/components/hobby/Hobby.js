import React, { Component } from 'react';
import '../../css/hobby/Hobby.css';
import Typing from 'react-typing-animation';

export class Hobby extends Component {
    render() {

        let hackathons = [{"imgName": "bigredhack", "link": "https://devpost.com/software/disastervision"},
                        {"imgName": "brick5", "link": "https://devpost.com/software/rshuttle"},
                        {"imgName": "brick6", "link": "https://devpost.com/software/letab"},
                        {"imgName": "dandy2018", "link": "https://github.com/jzaia18/DandyHacks2018"}];

        let aquascape1 = ["scape1", "scape2", "scape3"];
        let aquascape2 = ["scape4", "fish1", "fish2", "scape5"];

        let food1 = ["food1", "food2", "food3"];
        let food2 = ["food4", "food5", "food6"];

        return (
            <div className="hobby-outer-container">
                <div className="hobby-container">
                    <Typing speed={50} className="typing-text">
                        Aquascaping/Aquariums
                    </Typing>
                    <hr />
                    <div className="fish-container d-flex flex-row justify-content-center">
                        {aquascape1.map((item, key) => <div className="fish-img-container p-2" key={"fish1-img" + key}>
                            <img src={require("../../images/hobbies/" + item + ".png")} alt={"Aquascape Image"}/>
                        </div>)}
                    </div>
                    <div className="fish-container d-flex flex-row justify-content-center">
                        {aquascape2.map((item, key) => <div className="fish-img-container p-2" key={"fish2-img" + key}>
                            <img src={require("../../images/hobbies/" + item + ".png")} alt={"Aquascape Image"}/>
                        </div>)}
                    </div>
                    <Typing speed={50} className="typing-text">
                        Hackathons
                    </Typing>
                    <hr />
                    <div className="hackathon-container d-flex flex-row justify-content-center">
                        {hackathons.map((item, key) => <div className="hackathon-img-container p-2" key={"hackathon-img" + key}>
                            <a href={item.link}><img src={require("../../images/hobbies/" + item.imgName + ".png")} alt={"Hackathon Image"}/></a>
                        </div>)}
                    </div>
                    <Typing speed={50} className="typing-text">
                        Food Related Activities
                    </Typing>
                    <hr />
                    <div className="food-container d-flex flex-row justify-content-center">
                        {food1.map((item, key) => <div className="food-img-container p-2" key={"food1-img" + key}>
                            <img src={require("../../images/hobbies/" + item + ".png")} alt={"Food Image"}/>
                        </div>)}
                    </div>
                    <div className="food-container d-flex flex-row justify-content-center">
                        {food2.map((item, key) => <div className="food-img-container p-2" key={"food2-img" + key}>
                            <img src={require("../../images/hobbies/" + item + ".png")} alt={"Food Image"}/>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}
