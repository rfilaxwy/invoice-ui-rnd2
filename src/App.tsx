import React from 'react';
import Layout from './components/Layout/Layout';
import Invoice from './components/Invoice/Invoice';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
type invoiceNumber = number

const App = () => {
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
            <Layout>
              <Invoice
                invoiceNumber={1}
              />
            </Layout>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
