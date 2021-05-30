import * as reactbootstrap from 'react-bootstrap';
import './Languages.css';
import oracle from '../images/1200px-Oracle_SQL_Developer_logo.svg.png';
import adobeXD from '../images/adobeXD.png';
import mongodb from '../images/mongodb.png';
import postman from '../images/postman.png';

const Skills = () => {
    return (
        <reactbootstrap.Container className="tools">
            <reactbootstrap.Row  className="lang">
                Skills -
            </reactbootstrap.Row>
            <reactbootstrap.Row className="icongrp">
            <reactbootstrap.Col><a href="https://www.postman.com/"><img src={postman} className="icons" alt="..."></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://www.oracle.com/in/database/technologies/appdev/sql.html"><img src={oracle} className="icons" alt="..."></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://www.adobe.com/in/products/xd.html"><img src={adobeXD} className="icons" alt="..."></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://docs.mongodb.com/manual/"><img src={mongodb} className="icons" alt="..."></img></a></reactbootstrap.Col>
            </reactbootstrap.Row>
        </reactbootstrap.Container>
    );
};

export default Skills;