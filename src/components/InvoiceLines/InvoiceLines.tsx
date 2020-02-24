import * as React from 'react';

import classes from './invoicelines.module.scss';
import InvLine from '../InvLine/InvLine';
import { Line } from '../Invoice/Invoice';

interface InvoiceLinesProps {
    lines: Line[],
    editLine: (id: number) => Line,
    deleteLine: (id: number) => void
}


const invoiceLines = (props: InvoiceLinesProps): JSX.Element => {
    let invLines: JSX.Element[] = props.lines.map((line: Line) => {
        return (
            <InvLine
                line={line}
                editLine={props.editLine}
                deleteLine={props.deleteLine}
            />
        )
    });

    return (
        <div className={classes.lines}>
            {invLines}
        </div>
    )
}

export default invoiceLines;