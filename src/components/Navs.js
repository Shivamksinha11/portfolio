import './Navs.css';
import * as reactbootstrap from 'react-bootstrap';
import facebook from '../images/facebook.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';

const Navs = () => {
    return (
        <reactbootstrap.Navbar className="abc sticky-top" expand="lg">
            <reactbootstrap.Navbar.Brand><b>Portfolio</b></reactbootstrap.Navbar.Brand>
            <reactbootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <reactbootstrap.Navbar.Collapse id="basic -navbar-nav">
                <reactbootstrap.Nav className="mx-auto">
                    <reactbootstrap.Nav.Link href="#home" className="hov"><a href='https://www.facebook.com/'><img alt="..." className="logo" src={facebook}></img></a></reactbootstrap.Nav.Link>
                    <reactbootstrap.Nav.Link href="#home" className="hov"><a href='https://github.com/Shivamksinha11'><img alt="..." className="logo" src={github}></img></a></reactbootstrap.Nav.Link>
                    <reactbootstrap.Nav.Link href="#home" className="hov"><a href='https://www.instagram.com/shivam_k_sinha/'><img alt="..." className="logo" src={instagram}></img></a></reactbootstrap.Nav.Link>
                </reactbootstrap.Nav>
            </reactbootstrap.Navbar.Collapse>
        </reactbootstrap.Navbar>
    );
};

export default Navs;