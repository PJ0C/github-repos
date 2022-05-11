import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '400px',
  },
  action: {
    marginTop: 20,
  },
});

const Error404: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" color="secondary">
        Pagína não encontrada.
      </Typography>
      <Link to="/" className={classes.action}>
        <Button variant="contained">Voltar ao Início</Button>
      </Link>
    </div>
  );
};

export default Error404;
