import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './index.css';

import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App() {
  const name = 'John Doe'
  const isAuthenticated = false
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/about">About</Link></li> */}
            <li><Link to={`/about/${name}`}>About</Link></li>
            <li><Link to='/work'>Work</Link></li>
            {/* <li><Link to='/test'>Test</Link></li> */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" component={About} /> */}
          {isAuthenticated ?
            <>
              <Route path="/about/:name" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/work" component={Work} />
              {/* <Route path="/test" component={Test} /> */}
            </> : <Redirect to="/" />
          }
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>

      </main>
    </Router>
  );
}

// const Test = () => {

//   return (<h1>This is a test class</h1>)
// }

// Home Page
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
);

// About Page
const About = ({ match: { params: { name } } }) => (
  <Fragment>
    {name !== 'John Doe' ? <Redirect to="/" /> : null}
    <h1>About {name}</h1>
    <FakeText />
  </Fragment>
);

// Contact
const Contact = ({ history }) => (
  <Fragment>
    <h1>Contact</h1>
    <button onClick={() => history.push('/')} >Go to home</button>
    <FakeText />
  </Fragment>
);

// Works
const Work = () => {
  const history = useHistory()
  return (
    <Fragment>
      <h1>Work</h1>
      <button onClick={() => history.push('/')} >Go to home</button>
      <FakeText />
    </Fragment>
  );
}

const FakeText = () => (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia unde temporibus soluta eos dolorem, in aliquid nesciunt libero corrupti ea nostrum voluptate obcaecati quibusdam, impedit ipsa blanditiis animi dolor.
  </p>
);

export default App;
