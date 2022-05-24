import React, { ReactElement } from 'react';

import Avatar from '@material-ui/core/Avatar';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

interface RepoListItemProps {
  namee: string;
  infoname: string;
  iconavatar: ReactElement;
}

const RepoListItem: React.FC<RepoListItemProps> = ({ namee, infoname, iconavatar }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{iconavatar}</Avatar>
      </ListItemAvatar>

      <ListItemText primary={namee} secondary={infoname} />
    </ListItem>
  );
};

export default RepoListItem;
