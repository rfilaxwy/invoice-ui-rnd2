import * as React from 'react';

import classes from './invoiceLines.module.css';
import InvLine from '../InvLine/InvLine';


interface InvoiceLinesProps {
    invoiceLines: Line[];
    editLine: (id: number) => void;
    deleteLine: (id: number) => void;
}
interface Line {
    cost: number,
    service: string,
    units: string,
    quantity: number,
    description: string
}

const invoiceLines = (props: InvoiceLinesProps): React.ReactFragment => {
    let invoiceLines: JSX.Element[] = props.invoiceLines.map((line: Line) => {
        return (
            <InvLine
                line={line}
                editLine={props.editLine}
                deleteLine={props.deleteLine}
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