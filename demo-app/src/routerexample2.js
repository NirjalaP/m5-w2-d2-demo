import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Home() {
return <h2>Home</h2>;
}
function About() {
return <h2>About</h2>;
}

function Topics() {
let match = useRouteMatch();
return (
<div>
<h2>Topics</h2>
<ul>
<li>
<Link to={`${match.url}/cats`}>Cats</Link>
</li>
<li>
<Link to={`${match.url}/dogs`}>
Dogs
</Link>
</li>
</ul>
</div>
);
} 

export default function App() {
  return (
    <Router>
<div>
<h2>Topics</h2>
<ul>
<li>
<Link to={`${match.url}/cats`}>Cats</Link>
</li>
<li>
<Link to={`${match.url}/dogs`}>
Dogs
</Link>
</li>
</ul>
<Switch>
<Route path={`${match.path}/:topicId`}>
<Topic />
</Route>
<Route path={match.path}>
<h3>Please select a topic.</h3>
</Route>
</Switch>
</div> </Router>
  );
}
