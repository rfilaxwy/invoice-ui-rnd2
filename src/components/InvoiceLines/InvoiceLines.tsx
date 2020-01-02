import * as React from 'react';

import classes from './invoiceLines.module.css';

import Button from '../Button/Button';

interface InvoiceLinesProps {
    invoiceLines: object[]
}

const InvoiceLines = (props: InvoiceLinesProps) => {
    let invoiceLines: React.ReactFragment = props.invoiceLines.map((line) => {
        return (
            <ul className={classes.invoiceLine}>
                <li>{line.service}</li>
                <li>{line.quantity}</li>
                <li>{line.cost} {line.units}</li>
                <li>{line.description}</li>
            </ul>
        )
    })
    return (
        <div>
            {invoiceLines}
            <Button
                onClick={this.editInvoiceLine}
            >edit</Button>
            <Button
                onClick={this.deleteInvoiceLine}
            >delete</Button>
        </div>
    )
}

export default InvoiceLines;