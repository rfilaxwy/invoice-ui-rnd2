import React from 'react';
import Layout from './components/Layout/Layout';
import Invoice from './components/Invoice/Invoice';

type invoiceNumber= string

const App: React.ReactElement = () => {
  
  return (
    <div>
      <Layout>
        <Invoice
          invoiceNumber='1'
        />
      </Layout>
    </div>
  );
}

export default App;
