import "./App.css";
import SpaceView from "./SpaceView";
import Memes from "./Memes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Button = (props) => (
  <Link style={{ padding: 10, cursor: "pointer" }} {...props} />
);

function App() {
  return (
    <div className="App">
      <script src="https://widget.nomics.com/embed.js"></script>

      <Router>
        <div style={{ display: "flex" }}>
          <Button to="/">Home</Button>
          <Button to="/Memes">Memes</Button>
        </div>
        <Switch>
          <Route exact path="/" component={() => <SpaceView />}></Route>
          <Route path="/Memes" component={() => <Memes />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
