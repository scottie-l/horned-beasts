import React, {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { render } from "@testing-library/react";

class FormOnSubmit extends Component {
    constructor(props) {
        super(props);
        hornSelect
    }
}

handleSubmit = (event) => {
   event.preventDefault()
   this.setState({hornSelect: hornSelect})
   event.target.reset();
}

render() {
    return (
        <div>
            <Form onSubmit = {this.handleSubmit}>
                <Form.Group className = "mb-3" controlId = "hornSelect">
                    <Form.Label>Number of Horns?</Form.Label>
                    <Form.Control type = "text" placeholder = "on submit form"/>
                    <Button type = "submit">submit here</Button>
                </Form.Group>
            </Form>
        </div>
    )
}