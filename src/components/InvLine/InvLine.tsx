import * as React from 'react';
import classes from './InvLine.module.css'
import InvoiceLineControl from '../InvoiceLineControl/InvoiceLineControl';
type Line = {
    id: number,
    service: string,
    quantity: number,
    cost: number,
    units: string,
    description: string,
}
interface InvLineProps {
    line: Line,
    deleteLine: (id: number) => void,
    editLine: (id: number) => void
}

const invLine = (invLine: InvLineProps): JSX.Element => (
    <ul key={invLine.line.id} className={classes.invLine}>
        <li>{invLine.line.service}</li>
        <li>{invLine.line.quantity}</li>
        <li>{invLine.line.cost} {invLine.line.units}</li>
        <li>{invLine.line.description}</li>
        <button onClick={() => { invLine.editLine(invLine.line.id) }}>Edit</button>
        <button onClick={() => { console.log('I will be a copy line button') }}></button>
        <button onClick={() => { invLine.deleteLine(invLine.line.id) }}>Delete</button>
    </ul>
)

export default invLine;