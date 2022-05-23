import React, { useEffect, useState } from 'react';
import { CircularProgress, makeStyles, Theme } from '@material-ui/core';
import api from 'services/api';
import Chip from '@material-ui/core/Chip';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Divider from '@material-ui/core/Divider';
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
    marginTop: '-560px',
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
}));

const Repos: React.FC = () => {
  const classes = useStyles();
  const { name, owner } = useParams();
  const [repository, setRepository] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  console.log(repository);

  return (
    <div className={classes.container}>
      <Chip icon={<GitHubIcon />} label="Repositórios GitHub" />

      {loading ? (
        <CircularProgress />
      ) : (
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccountBoxIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Nome do usuário" secondary={repository.owner.login} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Nome do repositório" secondary={repository.name} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TurnedInNotIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="ID do repositório" secondary={repository.id} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TodayIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Criado em" secondary={repository.created_at} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EventAvailableIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Último update" secondary={repository.pushed_at} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CodeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Linguagem utilizada" secondary={repository.language} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <VisibilityIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Visibilidade" secondary={repository.visibility} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DeviceHubIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Branch padrão" secondary={repository.default_branch} />
          </ListItem>
          <div className={classes.user}>
            <div className={classes.align}>
              <Avatar alt="usuario" src={repository.owner.avatar_url} className={classes.avatar} />
            </div>
            <Button variant="contained" color="primary" href={repository.html_url}>
              Link para o site do GitHub
            </Button>
          </div>
        </List>
      )}
    </div>
  );
};

export default Repos;
