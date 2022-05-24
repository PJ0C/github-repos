import React, { useEffect, useMemo, useState } from 'react';
import { CircularProgress, makeStyles, Theme } from '@material-ui/core';
import api from 'services/api';
import RepoListItem from 'pages/repos/RepoListItem';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FolderIcon from '@material-ui/icons/Folder';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import TodayIcon from '@material-ui/icons/Today';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CodeIcon from '@material-ui/icons/Code';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px auto',
    maxWidth: 800,
    width: '100%',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
      margin: '30px 2px auto',
      minHeight: '130vh',
      maxWidth: 350,
    },
    border: '2px solid #ddc6a3',
    padding: 20,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  root: {
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    marginLeft: '400px',

    marginTop: '50px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '200px',
      marginLeft: '50px',
    },
  },
  form: {
    marginTop: 40,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    border: `2px solid ${theme.palette.primary.main}`,
    marginTop: '20px',

    background: '#fff',
    padding: 3,
    '& img': {
      borderRadius: '50%',
    },
  },
  user: {
    maxWidth: '250px',
    marginLeft: '-350px',
    [theme.breakpoints.down('md')]: {
      marginTop: '-770px',
      marginLeft: '0px',
    },
  },
  align: {
    marginLeft: '55px',
    margin: '0 0 20px',
  },
  alignback: {
    marginTop: '-610px',
    marginLeft: '-50px',
  },
}));

const Repos: React.FC = () => {
  const classes = useStyles();
  const { name, owner } = useParams();
  const [repository, setRepository] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const repoInformations = useMemo(
    () => [
      {
        name: 'Nome do Usuário',
        infoname: repository.owner.login,
      },
      {
        name: 'Nome do repositório',
        infoname: repository.name,
      },
    ],
    [repository],
  );

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

  return (
    <div className={classes.container}>
      <Chip icon={<GitHubIcon />} label="Repositórios GitHub" />

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <List className={classes.root}>
            <RepoListItem namee="Nome do Usuário" infoname={repository.owner.login} iconavatar={<AccountBoxIcon />} />
            <RepoListItem namee="Nome do repositório" infoname={repository.name} iconavatar={<FolderIcon />} />
            <RepoListItem namee="ID do repositório" infoname={repository.id} iconavatar={<TurnedInNotIcon />} />
            <RepoListItem namee="Criado em" infoname={repository.created_at} iconavatar={<TodayIcon />} />
            <RepoListItem namee="Último update" infoname={repository.pushed_at} iconavatar={<EventAvailableIcon />} />
            <RepoListItem namee="Linguagem utilizada" infoname={repository.language} iconavatar={<CodeIcon />} />
            <RepoListItem namee="Visibilidade" infoname={repository.visibility} iconavatar={<VisibilityIcon />} />
            <RepoListItem namee="Branch padrão" infoname={repository.default_branch} iconavatar={<DeviceHubIcon />} />
          </List>

          <List className={classes.root}>
            {repoInformations.map(info => (
              <RepoListItem
                key={info.name}
                namee={info.name}
                infoname={info.infoname}
                iconavatar={<AccountBoxIcon />}
              />
            ))}
          </List>

          <div className={classes.user}>
            <div className={classes.alignback}>
              <Button variant="contained" color="primary" href="/">
                Voltar
              </Button>
            </div>
            <div className={classes.align}>
              <Avatar alt="usuario" src={repository.owner.avatar_url} className={classes.avatar} />
            </div>
            <Button variant="contained" color="primary" href={repository.html_url}>
              Link para o site do GitHub
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Repos;
