import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const styles = makeStyles({
  ul: {
    display: 'grid',
    gap: '15px',
    marginTop: 30,
  },
});
interface RepoErrorProps {
  error: string;
}

const RepoError: React.FC<RepoErrorProps> = ({ error }) => {
  const classes = styles();
  return (
    <div className={classes.ul}>
      <Typography>{error}</Typography>
    </div>
  );
};

export default RepoError;
