import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// Here we import a helper function that will check if the email is valid
function ContactForm() {
    const [validated, setValidated] = useState(false);


    // Here we set two state variables for the form input fields
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');



    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, and name
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        }
        else {
            console.log("problem with form name")
        }
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        // if (!validateEmail(email) || !userName) {
        //   setErrorMessage('Email or username is invalid');
        //   // We want to exit out of this code block if something is wrong so that the user can correct it
        //   return;
        //   // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        // }

        //   return;
        // }


        
        setUserName('');

        setEmail('');
    };

    return (
        <div className="container text-center">
            <h2 style={{ color: "white" }}>Contact Me</h2>
            <form className="form" onSubmit={handleFormSubmit}>
        {/* <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        /> */}
        {/* <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        /> */}
        {/* <button type="submit">Submit</button> */}
      </form>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "white" }}>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email address.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label style={{ color: "white" }}>Name</Form.Label>
                    <Form.Control
                        required
                        type="Name"
                        placeholder="Enter Name"
                        value={userName}
                        name="Name"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a Name.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
            <Button type="submit" >Submit</Button>
        </div>
    );
}

export default ContactForm;
