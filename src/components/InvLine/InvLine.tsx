import * as React from 'react';
import classes from './InvLine.module.css'
import InvoiceLineControl from '../InvoiceLineControl/InvoiceLineControl';

// type InvLineProps = {
//     id: number,
//     service: string,
//     quantity: number,
//     cost: number,
//     units: string,
//     description: string,
//     deleteInvoiceLine: (id: number) => void,
//     editInvoiceLine: (id: number) => void
// }
const invLine = () => (<p>hello from invLine</p>)
// const invLine = (invLine: InvLineProps): JSX.Element => (
//     <ul key={invLine.id} className={classes.invLine}>
//         <li>{invLine.service}</li>
//         <li>{invLine.quantity}</li>
//         <li>{invLine.cost} {invLine.units}</li>
//         <li>{invLine.description}</li>
//         <button onClick={() => { invLine.editInvoiceLine(invLine.id) }}>Edit</button>
//         <button onClick={() => { invLine.deleteInvoiceLine(invLine.id) }}>Delete</button>
//     </ul>
// )

export default invLine;