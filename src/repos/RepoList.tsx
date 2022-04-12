import { List, makeStyles } from '@material-ui/core';
import React from 'react';
import RepoItem from './RepoItem';

const styles = makeStyles({
  ul: {
    display: 'grid',
    gap: '15px',
  },
});

interface RepoListItemProps {
  repos: any[];
}

const RepoList: React.FC<RepoListItemProps> = ({ repos }) => {
  const classes = styles();

  return (
    <List className={classes.ul}>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </List>
  );
};

export default RepoList;
