import * as React from 'react';
import InvoiceLines from '../InvoiceLines/InvoiceLines';
import InputLine from '../InputLine/InputLine'
import Auxiliary from '../../hoc/Auxiliary'
//Will be passed an invoice number prop for getting its content from the edge or server
export type Line = {
    id: number,
    service: string,
    cost: number,
    quantity: number,
    units: string,
    description: string
}
type lines = {
    lines: Line[]
}
type LineState = {
    lines: Line[],
    editLineValues?: Line | {}
}


interface InvoiceProps {
    invoiceNumber: number
}

export default class Invoice extends React.Component<InvoiceProps, LineState> {


    constructor(props: InvoiceProps) {
        super(props)
        this.state = {
            lines: [
                {
                    id: 1,
                    service: 'Gas fitting install',
                    cost: 200,
                    quantity: 4,
                    units: 'each',
                    description: ''
                },
                {
                    id: 2,
                    service: 'Employee tracking service',
                    cost: 70,
                    quantity: 40,
                    units: 'hr',
                    description: 'Monitoring heart rates and heat maps'
                }
            ],
            /// Need an editLine state that will be passed to the function of editline in order to update the editline
            editLineValues: {}
        }
    }
    addInvoiceLine = (line: Line) => {
        let { lines } = this.state;
        let id = this.getLastid() + 1;
        line.id = id;
        lines.push(line);
        this.setState({ lines: lines })
    }

    editInvoiceLine = (id: number): Line => {
        const { lines } = this.state;
        let editline;
        for (let line of lines) {
            if (line.id === id) editline = line
        }
        //This needs fixing to handle no line. 
        return editline ? editline : { id: 1, service: '', cost: 0, quantity: 0, units: '', description: '' };
    }
    deleteInvoiceLine = (id: number): void => {
        const { lines } = this.state;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i]['id'] === id) {
                lines.splice(i, 0);
            }
        }
        this.setState({ lines: lines })
    }

    getLastid = (): number => {
        //function to get last id and add one to it. Eventually will need to get the last line from API or cache
        let lineArray = this.state.lines;
        let arrayEnd = lineArray.length >= 1 ? lineArray[lineArray.length - 1]['id'] : 1
        if (typeof arrayEnd === 'number') {
            return arrayEnd
        }
        else {
            return 1;
        }
    }

    render() {
        return (
            <Auxiliary>
                <h2>Invoice: {this.props.invoiceNumber}</h2>
                <InputLine
                    getId={this.getLastid}
                    addLine={this.addInvoiceLine}
                />
                <InvoiceLines
                    lines={this.state.lines}
                    editLine={this.editInvoiceLine}
                    deleteLine={this.deleteInvoiceLine}
                />
            </Auxiliary>
        )
    }
}

