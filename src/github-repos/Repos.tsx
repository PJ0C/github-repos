import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import NameForm from './NameForm';
import RepoList from './RepoList';
import { Button, makeStyles } from '@material-ui/core';

const styles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 400,
    flexDirection: 'column',
    minWidth: 600,
  },
  seachButton: {
    marginTop: 10,
  },
});

const Repos: React.FC = () => {
  const classes = styles();

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [repos, setRepos] = useState<any[]>([]);
  const [username, setUsername] = useState('');

  function fetchRepositories(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    if (!username) {
      setRepos([]);
      return;
    }

    setButtonDisabled(true);

    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        setRepos(response.data);
      })
      .catch(err => console.error(err))
      .finally(() => setButtonDisabled(false));
  }

  return (
    <div className={classes.container}>
      <span>Repos</span>

      <form onSubmit={fetchRepositories}>
        <NameForm username={username} setUsername={setUsername} />
        <button type="submit" style={{ display: 'none' }} />
      </form>

      <Button
        className={classes.seachButton}
        variant="contained"
        disabled={buttonDisabled}
        onClick={() => fetchRepositories()}
        color="primary"
      >
        buscar repositórios
      </Button>

      <RepoList repos={repos} />
    </div>
  );
};

export default Repos;
