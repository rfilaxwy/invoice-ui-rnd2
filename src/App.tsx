import React from 'react';
import Layout from './components/Layout/Layout';
import Invoice from './components/Invoice/Invoice';
import CompanyHome from './components/CompanyHome/CompanyHome';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export type invoice = {
  invNumber: number,
  date: string
}
export type invoices = invoice[];
type invoiceNumber = number



const App = () => {
  const invoices: invoice[] = [
    { invNumber: 1, date: '2019/02/01' },
    { invNumber: 2, date: '2019/02/01' },
    { invNumber: 3, date: '2019/02/01' },
  ]
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Layout>
              <Invoice
                invoiceNumber={3}
              />
            </Layout>
          </Route>
          <Route path="/users">
            <Layout>
              <Invoice
                invoiceNumber={2}
              />
            </Layout>
          </Route>
          <Route path="/">
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
