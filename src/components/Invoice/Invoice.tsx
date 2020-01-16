import * as React from 'react';
import InvoiceLines from '../InvoiceLines/InvoiceLines';
import InputLine from '../InputLine/InputLine'
import Auxiliary from '../../hoc/Auxiliary'
//Will be passed an invoice number prop for getting its content from the edge or server
type Line = {
    id: string,
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
    editLineValues: Line
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
                    id: '1',
                    service: 'Gas fitting install',
                    cost: 200,
                    quantity: 4,
                    units: 'each',
                    description: ''
                },
                {
                    id: '2',
                    service: 'Employee tracking service',
                    cost: 70,
                    quantity: 40,
                    units: 'hr',
                    description: 'Monitoring heart rates and heat maps'
                }
            ],
            /// Need an editLine state that will be passed to the function of editline in order to update the editline
            editLineValues: {
                id: '',
                service: '',
                cost: 0,
                quantity: 0,
                units: '',
                description: ''
            }
        }
    }

    editInvoiceLine = (lineNumber: string): void => {
        const { lines } = this.state;
        let line = lines.filter(lineToCheck => { return lineToCheck.id == lineNumber })

    }
    deleteInvoiceLine = (lineNumber: string, ): void => { }

    render() {
        return (
            <Auxiliary>
                <h2>Invoice: {this.props.invoiceNumber}</h2>
                <InputLine
                // InputLineProps={this.state.editLineValues}
                />
                <InvoiceLines
                // lines={this.state.lines}
                // editLine={this.editInvoiceLine}
                // deleteLine={this.deleteInvoiceLine}
                />
            </Auxiliary>
        )
    }
}

