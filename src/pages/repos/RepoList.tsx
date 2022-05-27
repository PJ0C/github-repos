import { List, makeStyles } from '@material-ui/core';
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

interface RepoListProps {
  repos: any[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  const classes = styles();

  return (
    <List className={classes.ul} disablePadding>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </List>
  );
};

export default RepoList;
