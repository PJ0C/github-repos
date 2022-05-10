import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
  },
  action: {
    marginTop: 20,
  },
});

const Error404: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" color="textSecondary">
        Pagína não encontrada.
      </Typography>
      <div className={classes.action}>
        <Link to="/dashboard">Voltar ao início</Link>
      </div>
    </div>
  );
};

export default Error404;
