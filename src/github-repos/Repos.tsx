import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import Button from '@mui/material/Button';
import NameForm from './NameForm';

const Repos: React.FC = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [repos, setRepos] = useState<any[]>([]);
  const [username, setUsername] = useState('');

  function fetchRepositories(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 400,
        flexDirection: 'column',
      }}
    >
      <span>Repos</span>

      <form onSubmit={fetchRepositories}>
        <NameForm username={username} setUsername={setUsername} />
        <button type="submit" style={{ display: 'none' }} />
      </form>

      <Button variant="contained" disabled={buttonDisabled} onClick={() => fetchRepositories()}>
        buscar repositórios
      </Button>

      {repos.map(repo => (
        <p key={repo.full_name}>{repo.full_name}</p>
      ))}
    </div>
  );
};

export default Repos;
