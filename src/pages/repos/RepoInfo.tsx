import React, { useEffect, useMemo, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import api from 'services/api';
import RepoListItem from 'pages/repos/RepoListItem';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
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
import { ArrowBack } from '@material-ui/icons';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('xs')]: {},
  },

  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    border: `2px solid ${theme.palette.primary.main}`,
    background: '#fff',
    padding: 3,
    '& img': {
      borderRadius: '50%',
    },
  },
  user: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    [theme.breakpoints.down('xs')]: {},
  },
  alignback: {
    marginTop: '20px',
  },
  teste: {
    display: 'grid',
  },
  loading: {
    margin: '300px 370px 20px auto',
  },
  content: {
    display: 'flex',
    marginTop: '30px',
    flex: 1,
    justifyContent: 'space-around',
    [theme.breakpoints.down('xs')]: {
      display: 'grid',
      rowGap: '25px',
    },
  },
}));

const Repos: React.FC = () => {
  const classes = useStyles();
  const { name, owner } = useParams();
  const [repository, setRepository] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
    <div className={classes.teste}>
      <Chip icon={<GitHubIcon />} label="Repositórios GitHub" />

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={classes.alignback}>
            <Button startIcon={<ArrowBack />} variant="text" color="primary" onClick={() => navigate('/')}>
              Voltar
            </Button>
          </div>
          <div className={classes.content}>
            <div className={classes.user}>
              <Avatar alt="usuario" src={repository.owner.avatar_url} className={classes.avatar} />
              <Button variant="contained" target="_blank" color="primary" href={repository.html_url}>
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
