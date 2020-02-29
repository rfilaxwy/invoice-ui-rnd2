import React from 'react';

interface InvoiceListProps {
    invoices: string[];
}

const invoiceList = (props: any) => {
    let invoiceList = props.InvoiceListProps.map((listItem: string, index: number) => {
        <li key={index}>{listItem}</li>
    })
    return (
        <ul>
            {invoiceList}
        </ul>
    )
}
export default invoiceList;