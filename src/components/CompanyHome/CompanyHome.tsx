import React from 'react';
import axios from 'axios';
import { invoices, invoice } from '../../App';
import { useRouteMatch } from 'react-router-dom';
import Invoice from '../Invoice/Invoice';
import Layout from '../Layout/Layout';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
///will later take in company info that it will use to populate list of invoices

interface companyHomeProps {
    invoices: invoices
}


const CompanyHome = (props: companyHomeProps): JSX.Element => {
    const invList = props.invoices.map((invoice: invoice, index: number): JSX.Element => {
        let path = `/invoice/${invoice.invNumber}`;
        return (
            <Route key={index} path={path}>
                <Layout>
                    <Invoice
                        invoiceNumber={invoice.invNumber}
                    />
                </Layout>
            </Route>
        )
    })
    const invLinks = props.invoices.map((inv: invoice, index: number) => {
        let to = `/invoice/${inv.invNumber}`
        return (
            <li>
                <Link to={to}>Invoice No. {inv.invNumber}</Link>
            </li>
        )
    })

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        {invLinks}
                    </ul>
                </nav>


                <Switch>
                    {invList}
                </Switch>
            </div>
        </Router>
    )
}
export default CompanyHome;





