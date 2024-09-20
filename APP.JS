import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import Flashcards from "./components/Flashcards";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Mega Mind: Adaptive Learning App</h1>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/flashcards" component={Flashcards} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
