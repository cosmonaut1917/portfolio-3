import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BasicExample() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Password generator</Card.Title>
                <Card.Text>
                    You can use this app to generate a password
                </Card.Text>
                <Button variant="primary" href='https://github.com/cosmonaut1917' target='blank' >Check it out
                </Button>
            </Card.Body>
        </Card>

    );
}

export default BasicExample;

