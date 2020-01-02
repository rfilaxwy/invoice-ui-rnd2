import * as React from 'react';
import InvoiceLines from './InvoiceLines/InvoiceLines';

//Will be passed an invoice number prop for getting its content from the edge or server
export interface InvoiceLinesProps {
    lines: object[]
}

export default class Invoice extends React.Component {

    constructor() {
        super()
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
            <div>
                <InvoiceLines
                    lines={this.state.lines}
                />
            </div>
        )
    }
}

