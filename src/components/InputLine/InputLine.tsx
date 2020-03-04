import React, { FunctionComponent, useState } from 'react';
import { Line } from '../Invoice/Invoice';
import classes from './InputLine.module.scss';


interface InputLineProps {
    line?: Line,
    id?: number,
    service?: string,
    quantity?: number,
    cost?: number,
    units?: string,
    description?: string,
    addLine: (line: Line) => void,
    getId: () => number
}

const InputLine = (props: InputLineProps): JSX.Element => {

    const [service, setService] = React.useState<string>(props.service || '')
    const [cost, setCost] = React.useState<number>(props.cost || 0)
    const [quantity, setQuantity] = React.useState<number>(props.quantity || 0)
    const [units, setUnits] = React.useState<string>(props.units || '')
    const [description, setDescription] = React.useState<string>(props.description || '')
    const id = props.getId();

    const clear = (): void => {
        setService('');
        setCost(0);
        setQuantity(0);
        setUnits('');
        setDescription('')
    }

    return (
        <div>
            <div className={classes.form}>
                <input type="text" name="Service" placeholder="Type of service" value={service} required onChange={(e) => { setService(e.target.value) }} /><br />
                <input type="number" name="Cost" placeholder="Cost" value={cost} required onChange={(e) => { setCost(parseFloat(e.target.value)) }} /><br />
                <input type="number" name="Quantity" placeholder="Quantity" value={quantity} required onChange={(e) => { setQuantity(parseFloat(e.target.value)) }} /><br />
                <input type="text" name="Units" placeholder="Units" value={units} required onChange={(e) => { setUnits(e.target.value) }} /><br />
                <textarea placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </div>
            <button type="button" onClick={() => { props.addLine({ id, service, cost, quantity, units, description }); clear() }}>Add Line</button>
            <button onClick={() => clear()}>Clear Line</button>
        </div >
    );
}


export default InputLine;
