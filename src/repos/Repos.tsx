import React, { FormEvent, useState } from 'react';
import RepoList from './RepoList';
import { Typography, makeStyles, Theme } from '@material-ui/core';
import NameForm from './NameForm';
import RepoError from './RepoError';
import api from 'services/api';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: 600,
    width: '100%',
    marginTop: 30,
  },
  form: {
    marginTop: 40,
  },
}));

const Repos: React.FC = () => {
  const classes = useStyles();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [repos, setRepos] = useState<any[]>([]);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  function fetchRepositories(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    if (!username) {
      setRepos([]);
      return;
    }

    setButtonDisabled(true);

    api
      .get(`/users/${username}/repos`)
      .then(response => {
        setRepos(response.data);
      })
      .catch(err => {
        console.error(err);
        setError('Erro, usuário não encontrado');
      })

      .finally(() => setButtonDisabled(false));
  }

  return (
    <div className={classes.container}>
      <Typography align="center" variant="h6">
        Repositórios GitHub
      </Typography>
      {!error ? (
        <>
          <form className={classes.form} onSubmit={fetchRepositories}>
            <NameForm username={username} setUsername={setUsername} buttonDisabled={buttonDisabled} />
          </form>

          <RepoList repos={repos} />
        </>
      ) : (
        <RepoError error={error} />
      )}
    </div>
  );
};

export default Repos;
