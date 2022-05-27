import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"; 
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Educator from "./pages/Educator/Educator";
import Nav from "./components/Nav/Nav";
import "./App.scss";
import educatorsData from "./data/educators.json"

function App() {
    return (
      <>
        <BrowserRouter>
          <Nav />
          <Switch>
            {/* Use redirects to send users to updated routes! */}
            <Redirect from="/Home" to="/" />
            <Redirect from="/about/me" to="/about" />
            
            <Route path="/" exact component={Home} />
            <Route path="/about" render={(routerProps) => {
              return <About {...routerProps} educatorsData={educatorsData} />
            }} />

            {/* Show a specific educator information */}
            <Route path="/educator/:educatorName" render={(routerProps) => {
              return <Educator {...routerProps} educatorsData={educatorsData} />
            }} />
            
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </>
    );
}

export default App;
