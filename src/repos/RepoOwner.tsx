import React from 'react';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

interface RepoOwnerProps {
  owner: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',

      marginTop: 10,

      height: '190px',
      margin: '1px ',
    },
    espaco: {
      marginLeft: '20px',
      marginTop: '-10px',
    },
    espaceurl: {
      marginTop: 40,
      marginLeft: '-72px auto',
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
      <Typography className={classes.espaco}>{owner?.login} </Typography>
      <Typography className={classes.espaceurl}>{owner?.repos_url}</Typography>
    </div>
  );
};

export default RepoOwner;
