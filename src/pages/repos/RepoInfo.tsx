import React, { useEffect, useState } from 'react';
import { CircularProgress, makeStyles, Theme, Typography } from '@material-ui/core';
import api from 'services/api';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px auto',
    maxWidth: 800,
    width: '100%',
    minHeight: '100vh',
    border: '2px solid #ddc6a3',
    padding: 20,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  form: {
    marginTop: 40,
  },
}));

const Repos: React.FC = () => {
  const classes = useStyles();
  const { name, owner } = useParams();
  const [repository, setRepository] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/repos/${owner}/${name}`)
      .then(response => {
        setRepository(response.data);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(repository);

  return (
    <div className={classes.container}>
      <Chip icon={<GitHubIcon />} label="Repositórios GitHub" />

      {!loading ? (
        <CircularProgress />
      ) : (
        <div>
          <Typography>{repository.name}</Typography>
        </div>
      )}
    </div>
  );
};

export default Repos;
