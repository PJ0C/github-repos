import React from 'react';
import { Typography } from '@material-ui/core';

interface RepoOwnerProps {
  owner: any;
}

const RepoOwner: React.FC<RepoOwnerProps> = ({ owner }) => {
  return (
    <div>
      <Typography>{owner?.login}</Typography>
      <img src={owner.avatar_url} alt="" />
    </div>
  );
};

export default RepoOwner;
