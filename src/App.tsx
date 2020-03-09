import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Invoice from './components/Invoice/Invoice';
import CompanyHome from './components/CompanyHome/CompanyHome';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Line } from './components/Invoice/Invoice';



export type inv = {
  invoiceNumber: string,
  lines: Line[]
}


export default class App extends Component {
  state = {
    invoices: [{
      invoiceNumber: 'null',
      lines: [
        {
          "id": 0,
          "service": 'n/a',
          "cost": 0,
          "quantity": 0,
          "units": 'n/a',
          "description": 'n/a'
        }
      ]
    }
    ]
  }




  getInvoiceLines = async () => {
    const response = await fetch(`/api/invoice/`);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  componentDidMount() {
    let currentInvoices = this.state;
    this.getInvoiceLines()
      .then(res => {
        let invoices = res;
        console.log(res)
        let newInvoices = Object.assign({}, invoices);
        console.log(newInvoices)
        if (invoices) this.setState({ invoices: invoices });

      })
      .catch(err => { console.log(`Error ${err}`) })
  }

  render() {
    let lineLinks
    if (this.state.invoices) {
      lineLinks = this.state.invoices.map((inv, index) => {
        let path = `/invoice/${inv.invoiceNumber}`;
        return (
          <Route key={index} path={path}>
            <Layout>
              <Invoice
                invoiceNumber={parseInt(inv.invoiceNumber)}
              />
            </Layout>
          </Route>
        )
      })
    }
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/invoice"> New Invoice</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/invoice">
              <Layout>
                <Invoice
                  invoiceNumber={3}
                />
              </Layout>
            </Route>
            {lineLinks}
            <Route exact path="/">
              <CompanyHome
                invoices={this.state.invoices}
              />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
}
