import { ListItem } from '@mui/material';
import React from 'react';
import styles from './RepoItem.module.css';

interface RepoItemProps {
  repo: any;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  return (
    <ListItem className={styles.container}>
      <p key={repo.full_name}>{repo.full_name}</p>
    </ListItem>
  );
};

export default RepoItem;
