import React from 'react';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

interface RepoOwnerProps {
  owner: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      width: '220px',
      height: '220px',
      margin: '30px auto',
      borderRadius: '50%',
      border: '1px solid #000',
    },

    size: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
  }),
);

const RepoOwner: React.FC<RepoOwnerProps> = ({ owner }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt="usuario" src={owner?.avatar_url} className={classes.size} />
      <Typography align="center">{owner?.login}</Typography>
    </div>
  );
};

export default RepoOwner;
