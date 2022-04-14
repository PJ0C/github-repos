import { ListItem, makeStyles } from '@material-ui/core';
import React from 'react';

const styles = makeStyles({
  li: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: 600,
    boxShadow: '0 1px 4px 1px #ccc',
    borderRadius: 4,
  },
});

interface RepoItemProps {
  repo: any;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  const classes = styles();

  return (
    <ListItem button className={classes.li}>
      <p key={repo.full_name}>{repo.full_name}</p>
    </ListItem>
  );
};

export default RepoItem;
