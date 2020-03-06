import React from 'react';
import axios from 'axios';
import { invoices, invoice } from '../../App';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import Invoice from '../Invoice/Invoice';
///will later take in company info that it will use to populate list of invoices

interface companyHomeProps {
    invoices: invoices
}


const CompanyHome = (props: companyHomeProps): JSX.Element => {
    let match = useRouteMatch();
    const invList = props.invoices.map((invoice: invoice, index: number): JSX.Element => {
        return (
            <li key={invoice.invNumber}>
                <Link to={`/invoice/${invoice.invNumber}`}>{invoice.invNumber} - {invoice.date}</Link>
            </li>

        )
    })
    return (
        <div>
            <ul>
                {invList}
            </ul>
            <Route path={`${match.path}/invNumber`} component={Invoice} />
        </div>)
}
export default CompanyHome;