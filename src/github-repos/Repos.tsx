import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import Button from '@mui/material/Button';
import NameForm from './NameForm';
import styles from './Repos.module.css';
import RepoList from './RepoList';

const Repos: React.FC = () => {
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
    <div className={styles.container}>
      <span>Repos</span>

      <form onSubmit={fetchRepositories}>
        <NameForm username={username} setUsername={setUsername} />
        <button type="submit" style={{ display: 'none' }} />
      </form>

      <Button
        className="search-button"
        variant="contained"
        disabled={buttonDisabled}
        onClick={() => fetchRepositories()}
      >
        buscar repositórios
      </Button>

      <RepoList repos={repos} />
    </div>
  );
};

export default Repos;
