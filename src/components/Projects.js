import * as reactbootstrap from 'react-bootstrap';
import './Projects.css';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import calculator from '../images/calculator.png';

const Projects = () => {
    return (
        <reactbootstrap.Container>
            <reactbootstrap.Row  className="projects">Projects -</reactbootstrap.Row>
            <reactbootstrap.Row>
                <reactbootstrap.Col className="cards">
                    <reactbootstrap.Card style={{ width: '20rem' }}>
                        <reactbootstrap.Card.Img variant="top" src={project1} />
                        <reactbootstrap.Card.Body>
                            <reactbootstrap.Card.Title>Portfolio</reactbootstrap.Card.Title>
                            <reactbootstrap.Card.Text>
                                A portfolio is a compilation of materials that exemplifies your beliefs, skills, qualifications, education, training and experiences. It provides insight into your personality and work ethic. And this is my Portfolio.
                            </reactbootstrap.Card.Text>
                            <reactbootstrap.Card.Text>
                                <a href="https://github.com/Shivamksinha11/portfolio"><button class="neo2">code <span class="arrow2">&#8594;</span></button></a>
                            </reactbootstrap.Card.Text>
                        </reactbootstrap.Card.Body>
                    </reactbootstrap.Card>
                </reactbootstrap.Col>
                <reactbootstrap.Col className="cards">
                    <reactbootstrap.Card style={{ width: '20rem' }}>
                        <reactbootstrap.Card.Img variant="top" src={project2} />
                        <reactbootstrap.Card.Body>
                            <reactbootstrap.Card.Title>NewsApp</reactbootstrap.Card.Title>
                            <reactbootstrap.Card.Text>
                                This is my first basic individual project. In this project the user first needs to register themself and then login. Then they can add, edit or delete news.
                            </reactbootstrap.Card.Text>
                            <reactbootstrap.Card.Text>
                            <a href="https://github.com/Shivamksinha11/News-app"><button class="neo2">code <span class="arrow2">&#8594;</span></button></a>
                            </reactbootstrap.Card.Text>
                        </reactbootstrap.Card.Body>
                    </reactbootstrap.Card>
                </reactbootstrap.Col>
                <reactbootstrap.Col className="cards">
                    <reactbootstrap.Card style={{ width: '20rem' }}>
                        <reactbootstrap.Card.Img variant="top" src={calculator} />
                        <reactbootstrap.Card.Body>
                            <reactbootstrap.Card.Title>Calculator</reactbootstrap.Card.Title>
                            <reactbootstrap.Card.Text>
                                Normal Calculator created by html, css and javascript.
                            </reactbootstrap.Card.Text>
                            <reactbootstrap.Card.Text>
                                <a href="https://github.com/Shivamksinha11/Front-end/tree/main/calculator"><button class="neo2">code <span class="arrow2">&#8594;</span></button></a>
                            </reactbootstrap.Card.Text>
                        </reactbootstrap.Card.Body>
                    </reactbootstrap.Card>
                </reactbootstrap.Col>
            </reactbootstrap.Row>
        </reactbootstrap.Container>
        
    );
};

export default Projects;