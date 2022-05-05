import { ListItem, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import Chip from '@material-ui/core/Chip';
import VisibilityIcon from '@material-ui/icons/Visibility';

const styles = makeStyles({
  li: {
    display: 'grid',

    minWidth: 600,
    boxShadow: '0 1px 4px 1px #ccc',
    borderRadius: 4,
  },
  align: {
    display: 'flex',
    marginTop: '15px',
  },
  alignicon: {
    marginTop: '-2px',
  },
  alignvisibility: {
    marginLeft: '500px',
  },
  marginrepos: {
    marginTop: '-35px',
  },
});

interface RepoItemProps {
  repo: any;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  const classes = styles();

  return (
    <ListItem button className={classes.li}>
      <Chip className={classes.alignvisibility} icon={<VisibilityIcon />} label={repo.visibility} />
      <Typography variant="h6" className={classes.marginrepos} key={repo.full_name}>
        {repo.full_name}
      </Typography>

      <Typography color="textSecondary" variant="body2" className={classes.align} key={repo.language}>
        <CodeIcon className={classes.alignicon} />
        {repo.language}
      </Typography>
    </ListItem>
  );
};

export default RepoItem;
