import { makeStyles, Theme, ListItem } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px auto',
    maxWidth: 800,

    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 0px 0px auto',
      maxWidth: 1000,
    },
    border: '2px solid #ddc6a3',
    padding: 20,
    borderRadius: 4,
    backgroundColor: 'white',
  },
}));
const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Layout;
