import * as React from 'react';
import classes from './InvLine.module.css'
import Button from '../Button/Button';



const invLIne = (props:) => (
    <ul className={classes.invLine}>
        <li>{props.line.service}</li>
        <li>{props.line.quantity}</li>
        <li>{props.line.cost} {props.line.units}</li>
        <li>{props.line.description}</li>
        <Button
            onClick={props.editInvoiceLine}
        >edit</Button>
        <Button
            onClick={props.deleteInvoiceLine}
        >delete</Button>
    </ul>
)

export default invLIne;