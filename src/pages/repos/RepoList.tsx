import { List, makeStyles } from '@material-ui/core';
import { useApp } from 'providers/AppProvider';
import React from 'react';
import RepoItem from './RepoItem';

const styles = makeStyles(theme => ({
  ul: {
    display: 'grid',
    gap: 15,
    margin: '0 20px 20px',
    '& > a': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  },
}));

const RepoList: React.FC = () => {
  const classes = styles();
  const { repos } = useApp();

  return (
    <List className={classes.ul} disablePadding>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </List>
  );
};

export default RepoList;
