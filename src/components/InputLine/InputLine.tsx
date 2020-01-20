import React, { FunctionComponent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import classes from './InputLine.module.scss';

type Line = {
    id?: number,
    service: string,
    cost: number,
    quantity: number,
    units: string,
    description: string
}
interface InputLineProps {
    id?: number,
    service?: string,
    quantity?: number,
    cost?: number,
    units?: string,
    description?: string,
    addLine: (line: Line) => void
}



const InputLine = (props: InputLineProps) => {
    // const [line, setLine] = React.useState<InputLineProps>(props || {id:,service:'', quantity:0, cost:0, units:'', description:'',});

    const [service, setService] = React.useState<string>(props.service || '')
    const [cost, setCost] = React.useState<number>(props.cost || 0)
    const [quantity, setQuantity] = React.useState<number>(props.quantity || 0)
    const [units, setUnits] = React.useState<string>(props.units || '')
    const [description, setDescription] = React.useState<string>(props.description || '')

    return (
        <div>
            <form className={classes.form}>
                <input type="text" name="Service" placeholder="Type of service" required onChange={(e) => { setService(e.target.value) }} /><br />
                <input type="number" name="Cost" placeholder="Cost" required onChange={(e) => { setCost(parseInt(e.target.value)) }} /><br />
                <input type="number" name="Quantity" placeholder="Quantity" required onChange={(e) => { setQuantity(parseInt(e.target.value)) }} /><br />
                <input type="text" name="Units" placeholder="Units" required onChange={(e) => { setUnits(e.target.value) }} /><br />
                <textarea placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} />
                <button onClick={() => props.addLine({ service, cost, quantity, units, description })}>Add Line</button>
                <button>Clear Line</button>
            </form>
        </div>
    );
}


export default InputLine;