import React from "react";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import "./App.scss";

class App extends React.Component {
  state = {
    page: "Home",
  };

  changePage = (pageName) => {
    this.setState({
      page: pageName,
    });

    window.history.pushState({}, "", `/${pageName}`);
  };

  render() {
    return (
      <>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item" onClick={() => { this.changePage("Home"); }}>
              Home
            </li>
            <li className="nav__item" onClick={() => { this.changePage("About"); }}>
              About
            </li>
          </ul>
        </nav>
        {this.state.page === "Home" && <Home />}
        {this.state.page === "About" && <About />}
      </>
    );
  }
}

export default App;
