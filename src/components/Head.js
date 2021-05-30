import './Head.css';
import {Link} from 'react-scroll';

const Head = () => {
    return (
        <div className="container-fluid heading">
            
        <div className="header">
            <h1 className="heading-primary">
                <span className="subheader">Hello, I'm <span class="name">Shivam </span>.</span> 
                <span className="subheader2">I'm a full stack Web developer.</span>   
            </h1>
            <Link to="abc" smooth={true} duration={2000}><button className="neo btn1">View My Work <span class="arrow">&#8594;</span></button></Link>
        </div>
    </div>
    );
};

export default Head;