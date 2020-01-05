import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const inputLine = () => (
    <div>input lines will go here, service type, cost, unit type, quantity, description(a pop up modal w/ textarea) add button
        they will be a form
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridService">
                    <Form.Label>Service MAKE THIS A DROPDOWN OR ENTER NEW</Form.Label>
                    <Form.Control placeholder="Enter Service" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCost">
                    <Form.Label>Cost</Form.Label>
                    <Form.Control placeholder="Cost" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control placeholder="Quantity" />
            </Form.Group>

            <Form.Group controlId="formGrid">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
)

export default inputLine;