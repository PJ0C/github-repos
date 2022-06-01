import React, { createContext, Dispatch, FormEvent, SetStateAction, useContext, useState } from 'react';
import api from 'services/api';

interface AppContextValue {
  repos: any[];
  fetchRepositories: (event?: FormEvent<HTMLFormElement>) => void;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  owner: string;
  setOwner: Dispatch<SetStateAction<any>>;
  loading: boolean;
}

const AppContext = createContext<AppContextValue>({} as AppContextValue);
export const AppConsumer = AppContext.Consumer;

const AppProvider: React.FC = ({ children }) => {
  const [repos, setRepos] = useState<any[]>([]);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [owner, setOwner] = useState<any>(null);

  function fetchRepositories(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    if (!username) {
      setRepos([]);
      return;
    }

    setLoading(true);

    api
      .get(`/users/${username}/repos`)
      .then(response => {
        setRepos(response.data);
        setOwner(response.data[0].owner);
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
        setRepos([]);
      })

      .finally(() => setLoading(false));
  }

  return (
    <AppContext.Provider
      value={{ repos, fetchRepositories, username, setUsername, owner, setOwner, error, setError, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const context = useContext(AppContext);
  return context;
}

export default AppProvider;
