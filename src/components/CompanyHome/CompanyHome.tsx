import React from 'react';
import axios from 'axios';
import { invoices, invoice } from '../../App';
///will later take in company info that it will use to populate list of invoices

interface companyHomeProps {
    invoices: invoices
}


const CompanyHome = (props: companyHomeProps): JSX.Element => {
    const invList = props.invoices.map((invoice: invoice, index: number): JSX.Element => {
        return (
            <div key={index}>
                <a href='/about/3'>{invoice.invNumber}</a> <span>{invoice.date}</span>
            </div>
        )
    })
    return (<div>{invList}</div>)
}
export default CompanyHome;