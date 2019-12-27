import React from 'react';
import Dialog from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Click from './components/click';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Click} />
        <Route path="/dialog" exact component={Dialog} />
      </Router>
    </div>
  );
}

export default App;
