import { List } from '@mui/material';
import React from 'react';
import RepoItem from './RepoItem';
import styles from './RepoList.module.css';

interface RepoListItemProps {
  repos: any[];
}

const RepoList: React.FC<RepoListItemProps> = ({ repos }) => {
  return (
    <List className={styles.container}>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </List>
  );
};

export default RepoList;
