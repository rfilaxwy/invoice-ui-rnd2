import * as React from 'react';
import Header from '../Header/Header';
import InvoiceLines from '../InvoiceLines/InvoiceLines';
import InputLine from '../InputLine/InputLine';
import Auxiliary from '../../hoc/Auxiliary';
import TotalBox from '../TotalBox/TotalBox';
import { Decimal } from 'decimal.js';
import axios, { AxiosResponse } from 'axios';
//Will be passed an invoice number prop for getting its content from the edge or server
export type Line = {
    id: number,
    service: string,
    cost: number,
    quantity: number,
    units: string,
    description: string
}
export type lines = {
    lines: Line[]
}
export type Address = {
    street: string,
    city: string,
    country: string,
    state: string,
}
type LineState = {
    gst: number,
    lines: Line[],
    companyName: string,
    address: Address,
    email: string,
    logo: string
}


interface InvoiceProps {
    invoiceNumber: number
}

export default class Invoice extends React.Component<InvoiceProps, LineState> {


    constructor(props: InvoiceProps) {
        super(props)
        this.state = {
            gst: 0.07,
            lines: [

            ],
            companyName: 'Big Co.',
            address: {
                street: '1000 Main Blvd',
                city: 'New Metropolis City',
                state: 'Singapore II',
                country: 'Eliza Prime'
            },
            email: 'contactbig@big.com',
            logo: 'https://robohash.org/bigco' //USE a hash webstie for this for now robohash

        }
    }

    componentDidMount(): void {
        const invNum = this.props.invoiceNumber;
        if (invNum) {
            this.getInvoiceLines(invNum)
                .then(res => {
                    let invLines = res.data.lines;
                    let lines = invLines.map((line: Line) => {
                        return line;
                    })
                    this.setState({ lines: lines })
                })
                .catch(err => { console.log(`Error ${err}`) })
        }

    }
    getInvoiceLines = async (id: number) => {
        const response = await fetch(`/api/invoice/${id}`);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };


    addInvoiceLine = (line: Line) => {
        let { lines } = this.state;
        let id = this.getLastid() + 1;
        line.id = id;
        lines.push(line);
        this.setState({ lines: lines })
    }

    save = (line: Line): void => {
        const { lines } = this.state;

        for (let stateline of lines) {
            if (stateline.id === line.id) {
                Object.assign(stateline, line);
            }
        }
        this.setState({ lines: lines });
    }

    deleteInvoiceLine = (id: number): void => {
        let { lines } = this.state;
        let cut;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i]['id'] === id) {
                cut = i;

            }
        }
        if (cut) lines.splice(cut, 1);
        else { lines.splice(0) }
        this.setState({ lines: lines })
    }

    copyInvoiceLine = (line: Line): void => {
        const { lines } = this.state;
        const newId = this.getLastid();
        console.log(newId)
        line.id = newId + 1
        lines.push(line);
        this.setState({ lines: lines });
    }


    getLastid = (): number => {
        //check all id's and make it one bigger than the biggest.//////////////////////////
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
        let taxes = 0, subNontaxable = 0, subTaxable = 0, total = 0;
        let { lines, gst } = this.state;
        if (lines) {
            for (let i = 0; i < lines.length; i++) {
                subTaxable += (lines[i]['cost'] * lines[i]['quantity']);
            }
            taxes = parseFloat((subTaxable * gst).toFixed(2));
            total = parseFloat((taxes + subNontaxable + subTaxable).toFixed(2));
        }

        // let modal = this.state.editModal ? <EditLine line:Line={editLine} /> : null;
        const { companyName, address, email, logo } = this.state;
        return (
            <Auxiliary>
                <Header
                    companyName={companyName}
                    address={address}
                    logo={logo}
                    email={email}
                    invoiceNumber={this.props.invoiceNumber}
                />

                <InputLine
                    getId={this.getLastid}
                    addLine={this.addInvoiceLine}
                />
                <InvoiceLines
                    lines={this.state.lines}
                    deleteLine={this.deleteInvoiceLine}
                    copyLine={this.copyInvoiceLine}
                    save={this.save}
                    getId={this.getLastid}
                />

                <TotalBox

                    subTaxable={subTaxable}
                    subNonTaxable={subNontaxable}
                    gst={taxes}
                    total={total}
                />
            </Auxiliary >
        )
    }
}

