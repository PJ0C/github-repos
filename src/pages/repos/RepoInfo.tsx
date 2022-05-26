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

    minHeight: '100vh',
    [theme.breakpoints.down('xs')]: {
      margin: '10px 0px 10px auto',
      maxWidth: 350,
      marginLeft: '5px',
    },
    border: '2px solid #ddc6a3',
    padding: 20,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  root: {
    display: 'grid',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    marginLeft: '100px',

    marginTop: '30px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '50px',
      marginLeft: '50px',
    },
  },

  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    border: `2px solid ${theme.palette.primary.main}`,
    marginTop: '50px',
    marginLeft: '50px',

    background: '#fff',
    padding: 3,
    '& img': {
      borderRadius: '50%',
    },
  },
  user: {
    maxWidth: '250px',

    [theme.breakpoints.down('xs')]: {
      marginLeft: '50px',
    },
  },
  align: {
    margin: '0 0 20px',
  },
  alignback: {
    marginTop: '20px',
  },
  alignallitens: {
    display: 'flex',
    marginLeft: '80px',
    marginTop: '30px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0px',
      display: 'grid',
      marginTop: '0px',
    },
  },
}));

const Repos: React.FC = () => {
  const classes = useStyles();
  const { name, owner } = useParams();
  const [repository, setRepository] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const repoInformations = useMemo(() => {
    if (!repository) {
      return [];
    }

    return [
      {
        name: 'Nome do Usuário',
        infoname: repository.owner.login,
        iconavatar: <AccountBoxIcon />,
      },
      {
        name: 'Nome do repositório',
        infoname: repository.name,
        iconavatar: <FolderIcon />,
      },
      {
        name: 'ID do repositório',
        infoname: repository.id,
        iconavatar: <TurnedInNotIcon />,
      },
      {
        name: 'Criado em',
        infoname: repository.created_at,
        iconavatar: <TodayIcon />,
      },
      {
        name: 'Último update',
        infoname: repository.pushed_at,
        iconavatar: <EventAvailableIcon />,
      },
      {
        name: 'Linguagem utilizada',
        infoname: repository.language,
        iconavatar: <CodeIcon />,
      },
      {
        name: 'Visibilidade',
        infoname: repository.visibility,
        iconavatar: <VisibilityIcon />,
      },
      {
        name: 'Branch padrão',
        infoname: repository.default_branch,
        iconavatar: <DeviceHubIcon />,
      },
    ];
  }, [repository]);

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
          <div className={classes.alignback}>
            <Button variant="contained" color="primary" href="/">
              Voltar
            </Button>
          </div>
          <div className={classes.alignallitens}>
            <div className={classes.user}>
              <div className={classes.align}>
                <Avatar alt="usuario" src={repository.owner.avatar_url} className={classes.avatar} />
              </div>
              <Button variant="contained" color="primary" href={repository.html_url}>
                Link para o site do GitHub
              </Button>
            </div>
            <List className={classes.root}>
              {repoInformations.map(info => (
                <RepoListItem key={info.name} namee={info.name} infoname={info.infoname} iconavatar={info.iconavatar} />
              ))}
            </List>
          </div>
        </>
      )}
    </div>
  );
};

export default Repos;
