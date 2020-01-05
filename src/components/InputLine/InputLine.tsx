import React, { FunctionComponent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface Line {
    service: string;
    cost: number;
    units: string;
    description: string;
    quantity: number
}


const inputLine: (InputLineProps?: Line) => React.ElementType = (InputLineProps?: Line) => {
    const [line, setLine] = React.useState<Line | null>(InputLineProps);

    if (!line) {
        setLine({
            service: '',
            cost: 0,
            units: '',
            description: '',
            quantity: 0
        })
    }

    return (
        <div>input lines will go here, service type, cost, unit type, quantity, description(a pop up modal w/ textarea) add button
            they will be a form
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridService">
                        <Form.Label>Service MAKE THIS A DROPDOWN OR ENTER NEW</Form.Label>
                        <Form.Control placeholder="Enter Service" value={line.service} onChange={e => { setLine(...line, service: e.target.value)}} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCost">
                        <Form.Label>Cost</Form.Label>
                        <Form.Control placeholder="Cost" value={line.cost} onChange={e => { setLine(...line, cost: parseInt(e.target.value)/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control placeholder="Quantity" value={line.quantity} onChange={e => { setLine(...line, quantity: parseInt(e.target.value))}/>
                </Form.Group>

                <Form.Group controlId="formGrid">
                    <Form.Label>Units</Form.Label>
                    <Form.Control placeholder="units" value={line.units} onChange={e => { setLine(...line, units: e.target.value)}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="description" value={line.description} onChange={e => { setLine(...line, description: e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default inputLine;