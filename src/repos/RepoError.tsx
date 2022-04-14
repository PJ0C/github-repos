import React, { Dispatch, SetStateAction } from 'react';
import { Typography, makeStyles, Button } from '@material-ui/core';

const styles = makeStyles({
  container: {
    display: 'flex',
    height: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    marginTop: 30,
  },
});
interface RepoErrorProps {
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}

const RepoError: React.FC<RepoErrorProps> = ({ error, setError }) => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Typography variant="h6" color="error">
        {error}
      </Typography>

      <div className={classes.actions}>
        <Button variant="contained" color="primary" onClick={() => setError('')}>
          Tentar novamente
        </Button>
      </div>
    </div>
  );
};

export default RepoError;
