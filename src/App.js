import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Me from "./pages/Me/Me";
import Nav from "./components/Nav/Nav";
import "./App.scss";

function App() {
    return (
      <>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/about/me" component={Me} />
          </Switch>
        </BrowserRouter>
      </>
    );
}

export default App;
