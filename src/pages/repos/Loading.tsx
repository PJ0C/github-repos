import React from 'react';
import { CircularProgress, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  loading: {
    marginLeft: '380px',
    marginTop: '300px',
  },
}));
const Loading: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <CircularProgress className={classes.loading} />
    </div>
  );
};
export default Loading;
