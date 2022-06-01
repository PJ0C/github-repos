import Layout from 'pages/repos/Layout';
import AppProvider from 'providers/AppProvider';
import React from 'react';
import RoutesHandler from 'routes/RoutesHandler';

const App: React.FC = () => {
  return (
    <Layout>
      <AppProvider>
        <RoutesHandler />
      </AppProvider>
    </Layout>
  );
};

export default App;
