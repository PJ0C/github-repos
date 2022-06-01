import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const styles = makeStyles({
  container: {
    display: 'flex',
    marginTop: 300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RepoEmpty: React.FC = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Typography variant="body2" color="textSecondary">
        Sem repositórios para mostrar
      </Typography>
    </div>
  );
};

export default RepoEmpty;
