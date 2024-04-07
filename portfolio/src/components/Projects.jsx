import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BasicExample({project}) {
    
    return (
        <Card style={{ width: '18rem', marginBottom:'2em' }}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
                <Button variant="primary" href={project.Link} target='blank' >Check it out
                </Button>
            </Card.Body>
        </Card>

    );
}

export default BasicExample;

