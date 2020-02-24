import * as React from 'react';
import classes from './InvLine.module.scss'
import InvoiceLineControl from '../InvoiceLineControl/InvoiceLineControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faCopy, faTimes } from '@fortawesome/free-solid-svg-icons'

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
        <div>
            <FontAwesomeIcon icon={faEdit} onClick={() => { invLine.editLine(invLine.line.id) }} />
            <FontAwesomeIcon icon={faCopy} onClick={() => { console.log('I will be a copy line button') }} />
            <FontAwesomeIcon icon={faTimes} onClick={() => { invLine.deleteLine(invLine.line.id) }} />
        </div>
    </ul>
)

export default invLine;