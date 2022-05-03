import { ListItem, makeStyles } from '@material-ui/core';
import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import Chip from '@material-ui/core/Chip';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
  align: {
    display: 'flex',
  },
});

interface RepoItemProps {
  repo: any;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  const classes = styles();

  return (
    <ListItem button className={classes.li}>
      <p key={repo.full_name}>
        {repo.full_name}
        <Chip icon={<VisibilityIcon />} label={repo.visibility} />
      </p>

      <p className={classes.align} key={repo.language}>
        <CodeIcon />
        {repo.language}
      </p>
    </ListItem>
  );
};

export default RepoItem;
