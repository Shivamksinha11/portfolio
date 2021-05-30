import * as reactbootstrap from 'react-bootstrap';
import shivam from '../images/shivam.JPG';
import './About.css';

const About = () => {
    return (
        <reactbootstrap.Container>
            <reactbootstrap.Row  className="aboutme">About -</reactbootstrap.Row>
            <reactbootstrap.Row>
                <reactbootstrap.Col>
                    <img src={shivam} class="image" alt="..."></img>
                </reactbootstrap.Col>
                <reactbootstrap.Col className="about">
                    <span class="text">Who's this guy??</span>
                    <span class="subtext">
                        I'm a Full Stack Web Developer and a c++ programmer. And currently I'm pursuing Btech in Information Technology from KIIT University.
                        I've serious passion for UI effects,animations and creating intuitive, dynamic user experiences.
                    </span>
                </reactbootstrap.Col>
            </reactbootstrap.Row>
        </reactbootstrap.Container>
    );
};

export default About;