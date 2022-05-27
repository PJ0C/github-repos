import Layout from 'pages/repos/Layout';
import React from 'react';
import RoutesHandler from 'routes/RoutesHandler';

const App: React.FC = () => {
  return (
    <Layout>
      <RoutesHandler />
    </Layout>
  );
};

export default App;
