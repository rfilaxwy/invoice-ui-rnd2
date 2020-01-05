import * as React from 'react';
import InvoiceLines from '../InvoiceLines/InvoiceLines';
import InputLine from '../InputLine/InputLine'
import Auxiliary from '../../hoc/Auxiliary'
//Will be passed an invoice number prop for getting its content from the edge or server
type Line = {
    service: string,
    cost: number,
    quantity: number,
    units: string,
    description: string
}
type LineState = {
    lines: Line[]
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
                    service: 'Gas fitting install',
                    cost: 200,
                    quantity: 4,
                    units: 'each',
                    description: ''
                },
                {
                    service: 'Employee tracking service',
                    cost: 70,
                    quantity: 40,
                    units: 'hr',
                    description: 'Monitoring heart rates and heat maps'
                }
            ]
        }
    }
    render() {
        return (
            <Auxiliary>
                <InputLine />
                <InvoiceLines
                    lines={this.state.lines}
                />
            </Auxiliary>
        )
    }
}

