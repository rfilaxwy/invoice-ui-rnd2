import React from 'react';
import { inv } from '../../App';
import Invoice from '../Invoice/Invoice';
import Layout from '../Layout/Layout';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import classes from './companyhome.module.scss';
///will later take in company info that it will use to populate list of invoices


interface CompanyProps {
    invoices: inv[]
}

const CompanyHome = (props: CompanyProps): JSX.Element => {
    const invList = props.invoices.map((invoice: inv, index: number): JSX.Element => {
        let path = `/invoice/${invoice.invoiceNumber}`;
        return (
            <Route key={index} path={path}>
                <Layout>
                    <Invoice
                        invoiceNumber={parseInt(invoice.invoiceNumber)}
                    />
                </Layout>
            </Route>
        )
    })
    const invLinks = props.invoices.map((inv: inv, index: number) => {
        let to = `/invoice/${inv.invoiceNumber}`
        return (
            <li key={index} className={classes.navlines}>
                <Link to={to}>Invoice No. {inv.invoiceNumber}</Link>
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





