import "./App.css";
import SpaceView from "./SpaceView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Button = (props) => (
  <Link style={{ padding: 10, cursor: "pointer" }} {...props} />
);

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ display: "flex" }}>
          <Button to="/">Home</Button>
          <Button to="/Memes">Memes</Button>
        </div>
        <Switch>
          <Route exact path="/">
            <SpaceView />
          </Route>
          <Route path="/Memes">Memes</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
