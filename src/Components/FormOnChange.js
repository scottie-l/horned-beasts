import React, {Component} from "react";
import Form from 'react-bootstrap/Form';

class FormOnChange extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        this.setState({hornSelect: event.target.value})
    }

    render () {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Horns</Form.Label>
                    <Form.Control onChange = {this.handleChange} type = 'text' placeholder="OnChange form" value = {this.state.value} />
                </Form.Group>
            </Form>
    }
}

export default FormOnChange;