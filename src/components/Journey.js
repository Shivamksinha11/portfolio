import * as reactbootstrap from 'react-bootstrap';
import modern from '../images/modern.jfif';
import kiit from '../images/kiit.jpg';
import cv from '../images/cv.jfif';

import './Journey.css';

const journey = () => {
    return (
        <reactbootstrap.Container>
        <reactbootstrap.Row className="lang">
        education-
        </reactbootstrap.Row>
        <reactbootstrap.Row className="jour">

        
        <div id="timeline-container">
            <div class="inner-container">
            <h2 class="head">Journey</h2>
            <ul class="timeline">
                <a href="https://kiit.ac.in/"><li class="timeline-item" data-date="2019-2023"><img src={kiit} class="card-img-top journey" alt="..." /><br />
                KIIT University, Bhubaneshwar, Odisha
                <div class="text-muted">Btech</div>
                </li></a>
                <a href="http://www.chinmayabokaro.org/"><li class="timeline-item" data-date="2017-2019"><img src={cv} class="card-img-top journey" alt="..." /><br />
                Chinmaya Vidyalaya(CBSE), Bokaro, Jharkhand
                <div class="text-muted">PCM + Computer Science</div>
                </li></a>
                <a href="http://www.sgdms.in/home.aspx"><li class="timeline-item" data-date="2015-2017"><img src={modern} class="card-img-top journey" alt="..." /><br />
                Modern School(CBSE), Taldanga, Dhanbad
                </li></a>
            </ul>
            </div>
        </div>
        </reactbootstrap.Row>
    </reactbootstrap.Container>
    );
};


export default journey;