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
    let disabled = service.length > 0 && cost > 0 && quantity > 0 && units.length > 0;
    let buttonStatus = disabled ? 'Fill lines' : "Add line";

    return (
        <div>
            <form className={classes.form}>
                <input type="text" name="Service" placeholder="Type of service" value={service} onChange={(e) => { setService(e.target.value) }} /><br />
                <input type="number" name="Cost" placeholder="Cost" value={cost} onChange={(e) => { setCost(parseFloat(e.target.value)) }} /><br />
                <input type="number" name="Quantity" placeholder="Quantity" value={quantity} onChange={(e) => { setQuantity(parseFloat(e.target.value)) }} /><br />
                <input type="text" name="Units" placeholder="Units" value={units} onChange={(e) => { setUnits(e.target.value) }} /><br />
                <textarea placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </form>
            <button type="button" onClick={() => { props.addLine({ id, service, cost, quantity, units, description }); clear() }} disabled={!disabled}>{buttonStatus}</button>
            <button onClick={() => clear()}>Clear Line</button>
        </div >
    );
}


export default InputLine;
