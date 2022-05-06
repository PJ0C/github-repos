import { ListItem, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import Chip from '@material-ui/core/Chip';
import VisibilityIcon from '@material-ui/icons/Visibility';

const styles = makeStyles({
  li: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '5px',
    boxShadow: '0 1px 4px 1px #ccc',
    borderRadius: 4,
    flex: 1,
  },
  language: {
    display: 'flex',
    marginTop: '15px',
  },
  icon: {
    marginTop: '-2px',
  },
  chip: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  repositoryname: {
    marginTop: '5px',
    maxWidth: '75%',
  },
});

interface RepoItemProps {
  repo: any;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  const classes = styles();

  return (
    <ListItem button className={classes.li}>
      <Chip className={classes.chip} icon={<VisibilityIcon />} label={repo.visibility} />
      <Typography variant="h6" className={classes.repositoryname} key={repo.full_name}>
        {repo.full_name}
      </Typography>
      <Typography color="textSecondary" variant="body2" className={classes.language} key={repo.language}>
        <CodeIcon className={classes.icon} />
        {repo.language}
      </Typography>
    </ListItem>
  );
};

export default RepoItem;
