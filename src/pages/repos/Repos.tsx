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

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    marginTop: 40,
  },
}));

const Repos: React.FC = () => {
  const classes = useStyles();
  const { fetchRepositories, username, setUsername, loading, repos, error, setError, owner } = useApp();

  return (
    <div>
      <Chip icon={<GitHubIcon />} label="Repositórios GitHub" />

      <form className={classes.form} onSubmit={fetchRepositories}>
        <RepoForm username={username} setUsername={setUsername} buttonDisabled={loading} />
      </form>

      {repos.length === 0 ? (
        <RepoEmpty />
      ) : error ? (
        <RepoError error={error} setError={setError} />
      ) : (
        <>
          <RepoOwner owner={owner} />
          <RepoList repos={repos} />
        </>
      )}
    </div>
  );
};

export default Repos;
