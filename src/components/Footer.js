import * as reactbootstrap from 'react-bootstrap';
import './Footer.css';
import whatsapp from '../images/whatsapp.png';

const Footer = () => {
    return (
        <div className="footer">
            <reactbootstrap.Container>
                <reactbootstrap.Row>
                    <span className="text-muted">Contact Details</span>
                </reactbootstrap.Row>
                <reactbootstrap.Row>
                    <reactbootstrap.Col>
                        <div className="contact">
                            <span className="phone">phone:</span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="tel:+918709132151" className="number"> +91 8709132151</a>
                        </div>
                        <div className="contact">
                            <img src={whatsapp} className="whatsapp" alt="..."></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://wa.me/+918986619193' className="number">&nbsp;&nbsp;&nbsp;+91 8986619193</a>
                        </div>
                        <div className="contact">
                            <span className="phone">Email:</span>&nbsp;&nbsp;&nbsp;<a href="mailto:shivamksinha11@gmail.com" class="number">shivamksinha11@gmail.com</a>
                        </div>
                    </reactbootstrap.Col>
                    <reactbootstrap.Col className="abcd">
                        <div class="shiv text-muted">Shivam &#169; 2021</div>
                    </reactbootstrap.Col>
                </reactbootstrap.Row>
            </reactbootstrap.Container>
        </div>
    );
};

export default Footer;