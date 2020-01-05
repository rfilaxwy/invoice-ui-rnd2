import * as React from 'react';

import classes from './invoiceLines.module.css';
import InvLine from '../InvLine/InvLine';


interface InvoiceLinesProps {
    invoiceLines: object[]
}
interface Line {
    cost: number,
    service: string,
    units: string,
    quantity: number,
    description: string
}

const invoiceLines = (props: InvoiceLinesProps): React.ReactFragment => {
    
    let invoiceLines: React.ReactFragment = props.invoiceLines.map((line: Line => React.ReactComponent) => {
        return (
            <InvLine
                invLine={line}

                //need to pass down edit line and delete line function
            />
        )
    });

    return (
        <div>
            {invoiceLines}
            
        </div>
    )
}

export default invoiceLines;