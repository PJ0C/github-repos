import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h2>Repos</h2>
    </div>
  );
}

/*
const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  const classes = styles();

  return (
    <ListItem button className={classes.li}>
      <Chip className={classes.chip} icon={<VisibilityIcon />} label={repo.visibility} />
      <Typography variant="h6" className={classes.repositoryname} key={repo.full_name}>
        {repo.full_name}
      </Typography>
      <Typography color="textSecondary" variant="body2" className={classes.language} key={repo.language}>
        <CodeIcon className={classes.icon} />
        {repo.language}
      </Typography>
    </ListItem>
  );
};
*/

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/about">Teste</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
