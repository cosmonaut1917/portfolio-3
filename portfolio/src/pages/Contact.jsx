//  import Form from "../components/Form.jsx";
import { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
const serviceId = "service_pahdx1d";
const templateId = "template_78a16uu";
const publicKey = 'XFmiX3ixi7IBtQ0Wc'
function ContactMe() {
    const [validated, setValidated] = useState(false);
    const form = useRef();

    // Here we set two state variables for the form input fields
    // const [email, setEmail] = useState('');
    // const [userName, setUserName] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: ''
    });
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        //   const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }
        
        // setValidated(true);
        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );


        console.log(formData);
        setFormData({ email: '', name: '', message: '' });
    };
    return (
        <div style={{ backgroundColor: "#1a1a1a", width: "90%", margin: "0 auto", height: "80%", borderRadius: "10px" }}>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit} ref={form}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "white" }}>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        value={formData.email}
                        name="email"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email address.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label style={{ color: "white" }}>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Name"
                        value={formData.name}
                        name="name"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a Name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label style={{ color: "white" }}>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Message"
                        value={formData.message}
                        name="message"
                        onChange={handleInputChange}
                        as="textarea"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a message.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" >Submit</Button>
            </Form>
        </div>
    )
}
export default ContactMe;