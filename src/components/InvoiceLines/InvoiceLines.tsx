import React from 'react';

import classes from './invoicelines.module.scss';
import InvLine from '../InvLine/InvLine';
import { Line } from '../Invoice/Invoice';

interface InvoiceLinesProps {
    lines: Line[],
    deleteLine: (id: number) => void,
    copyLine: (line: Line) => void,
    save: (line: Line) => void,
    getId: () => number
}


const invoiceLines = (props: InvoiceLinesProps): JSX.Element => {
    let invLines: JSX.Element[] = props.lines.map((line: Line, index: number) => {
        return (
            <InvLine
                key={index}
                line={line}
                deleteLine={props.deleteLine}
                copyLine={props.copyLine}
                save={props.save}
                getId={props.getId}
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