import React from 'react';
import { Typography } from '@material-ui/core';

interface RepoErrorProps {
  error: string;
}

const RepoError: React.FC<RepoErrorProps> = ({ error }) => {
  return (
    <div>
      <Typography>{error}</Typography>
    </div>
  );
};

export default RepoError;
