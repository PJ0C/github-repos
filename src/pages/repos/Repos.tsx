import React from 'react';
import RepoList from './RepoList';
import { makeStyles, Theme } from '@material-ui/core';
import RepoForm from './RepoForm';
import RepoError from './RepoError';
import RepoEmpty from './RepoEmpty';
import RepoOwner from './RepoOwner';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useApp } from 'providers/AppProvider';
import Loading from './Loading';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    marginTop: 40,
  },
  teste: {
    display: 'grid',
  },
}));

const Repos: React.FC = () => {
  const classes = useStyles();
  const { fetchRepositories, username, setUsername, loading, repos, error, setError } = useApp();

  return (
    <div className={classes.teste}>
      <Chip icon={<GitHubIcon />} label="Repositórios GitHub" />

      <form className={classes.form} onSubmit={fetchRepositories}>
        <RepoForm username={username} setUsername={setUsername} buttonDisabled={loading} />
      </form>

      {loading ? (
        <div>
          <Loading />
        </div>
      ) : repos.length === 0 ? (
        <RepoEmpty />
      ) : error ? (
        <RepoError error={error} setError={setError} />
      ) : (
        <>
          <RepoOwner />
          <RepoList />
        </>
      )}
    </div>
  );
};

export default Repos;
