import "./App.css";
import Homepage from "./pages/home";
import DetailPage from "./pages/detail";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
function App() {
  return (
    <Router>
      <div className="App p-4">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/detail" component={DetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
