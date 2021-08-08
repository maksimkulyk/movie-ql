import { HashRouter as Router, Route } from "react-router-dom";
import Details from "../routes/Details";
import Home from "../routes/Home";

interface Props {}

const App = (props: Props) => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/:id" component={Details}></Route>
    </Router>
  );
};

export default App;
