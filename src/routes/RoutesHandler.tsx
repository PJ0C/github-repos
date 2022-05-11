import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Repos from 'pages/repos/Repos';
import Error404 from 'pages/404/Error404';
import RepoInfo from 'pages/repos/RepoInfo';

const RoutesHandler: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Repos />} />
        <Route path="/repos/:owner/:name" element={<RepoInfo />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesHandler;
