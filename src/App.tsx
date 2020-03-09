import React, { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import Invoice from './components/Invoice/Invoice';
import CompanyHome from './components/CompanyHome/CompanyHome';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Line } from './components/Invoice/Invoice';



export type inv = {
  invoiceNumber: string,
  lines: Line[]
}


const App = () => {

  const [invoices, setInvoices] = useState(
    [
      {
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
  );

  const getInvoiceLines = async () => {
    const response = await fetch(`/api/invoice/`);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  useEffect(() => {
    getInvoiceLines()
      .then(res => {
        let invLines = res.data;
        console.log(invLines)
        if (invLines) setInvoices([...invLines]);

      })
      .catch(err => { console.log(`Error ${err}`) })
  })
  let lineLinks
  if (invoices) {
    lineLinks = invoices.map((inv, index) => {
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
              invoices={invoices}
            />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
