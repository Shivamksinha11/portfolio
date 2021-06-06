import './Head.css';
import {Link} from 'react-scroll';
import Typist from 'react-typist';

const Head = () => {
    return (
        <div className="container-fluid heading">
            
        <div className="header">
            <h1 className="heading-primary">
                <Typist>
                <Typist.Delay ms={500} />
                    <span className="subheader">Hello, I'm <span class="name">Shivam </span>.</span> 
                    <span className="subheader2">I'm a full stack Web developer.</span>   
                    <Link to="abc" smooth={true} duration={2000}><button className="neo btn1">View My Work <span class="arrow">&#8594;</span></button></Link>
                </Typist> 
            </h1>
            
        </div>
    </div>
    );
};

export default Head;
