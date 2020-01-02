import React from 'react';

interface InvoiceListProps {
    invoices: string[];
}

const InvoiceList = (props: any) => {
    let invoiceList = props.InvoiceListProps.map((listItem: string, index: number) => {
        <li key={index}>{listItem}</li>
    })
    return (
        <ol>
            {invoiceList}
        </ol>
    )
}