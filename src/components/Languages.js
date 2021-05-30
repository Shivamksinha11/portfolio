import * as reactbootstrap from 'react-bootstrap';
import './Languages.css';
import bootstrap from '../images/bootstrap.png';
import c from '../images/C.webp';
import cpp from '../images/C++.png';
import css from '../images/css.png';
import expressjs from '../images/expressjs.png';
import html from '../images/html.png';
import java from '../images/java.png';
import javaScript from '../images/javaScript.png';
import nodejs from '../images/nodejs.png';
import npm from '../images/npm.png';
import python from '../images/python.png';
import react from '../images/favicon.ico';

const Languages = () => {
    return (
        <reactbootstrap.Container className="tools">
            <reactbootstrap.Row  className="lang">
                Languages -
            </reactbootstrap.Row>
            <reactbootstrap.Row className="icongrp">
                <reactbootstrap.Col><a href="https://www.tutorialspoint.com/cprogramming/index.htm"><img alt="..." src={c} className="icons"></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://www.w3schools.com/cpp/"><img alt="..." src={cpp} className="icons"></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://www.w3schools.com/css/"><img alt="..." src={css} className="icons"></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://www.w3schools.com/html/"><img alt="..." src={html} className="icons"></img></a></reactbootstrap.Col>
            </reactbootstrap.Row>
            <reactbootstrap.Row className="icongrp">
                <reactbootstrap.Col><a href="https://nodejs.org/en/docs/"><img alt="..." src={nodejs} class="icons"></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://www.w3schools.com/java/"><img alt="..." src={java} class="icons"></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://docs.npmjs.com/"><img alt="..." src={npm} class="icons"></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://expressjs.com/"><img alt="..." src={expressjs} class="icons"></img></a></reactbootstrap.Col>
            </reactbootstrap.Row>
            <reactbootstrap.Row className="icongrp">
                <reactbootstrap.Col><a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"><img alt="..." src={bootstrap} className="icons"></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://www.w3schools.com/js/"><img alt="..." src={javaScript} className="icons"></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://www.python.org/"><img alt="..." src={python} className="icons"></img></a></reactbootstrap.Col>
                <reactbootstrap.Col><a href="https://reactjs.org/"><img alt="..." src={react} className="icons"></img></a></reactbootstrap.Col>
            </reactbootstrap.Row>
        </reactbootstrap.Container>
    );
};

export default Languages;