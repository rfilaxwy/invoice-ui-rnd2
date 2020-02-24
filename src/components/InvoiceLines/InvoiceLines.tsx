import * as React from 'react';

import classes from './invoiceLines.module.css';
import InvLine from '../InvLine/InvLine';
import { Line } from '../Invoice/Invoice';

interface InvoiceLinesProps {
    lines: Line[],
    editLine: (id: number) => Line,
    deleteLine: (id: string) => void
}


const invoiceLines = (props: InvoiceLinesProps): React.ReactFragment => {
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
        <div>
            {invLines}
        </div>
    )
}

export default invoiceLines;