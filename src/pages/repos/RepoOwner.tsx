import React from 'react';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { useApp } from 'providers/AppProvider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
      },
      alignItems: 'center',
      columnGap: 20,
      margin: '30px 0',
    },
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      border: `2px solid ${theme.palette.primary.main}`,
      background: '#fff',
      padding: 3,
      '& img': {
        borderRadius: '50%',
      },
    },
    ownerData: {
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  }),
);

const RepoOwner: React.FC = () => {
  const classes = useStyles();
  const { owner } = useApp();

  return (
    <div className={classes.container}>
      <Avatar alt="usuario" src={owner?.avatar_url} className={classes.avatar} />
      <div className={classes.ownerData}>
        <Typography variant="h6">{owner?.login} </Typography>
        <Typography color="textSecondary" variant="body2">
          {owner?.html_url}
        </Typography>
      </div>
    </div>
  );
};

export default RepoOwner;
