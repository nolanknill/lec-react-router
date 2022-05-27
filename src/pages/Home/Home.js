import "./Home.scss";

const Home = () => {
    document.title = "Lecture: React Router | Home";
    return (
        <main className="home">
            <h1>Home Page</h1>
            <p>Today's lesson is on React Router</p>
            <ol>
                <li>Install react-router-dom@5.3</li>
                <li>Import BrowserRouter, Route, and Switch into your App.js component</li>
                <li>Provide each {`<Route>`} component with a path and component.</li>
                <li>Multiple {`<Route>`} should be placed inside a {`<Switch>`} inside a{`<BrowserRouter>`}</li>
            </ol>
            <h3>Example</h3>
            <pre>{`
    import { BrowserRouter, Route, Switch } from "react-router-dom";

    function App(){
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}>
                <Route path="/about" component={About}>
            </Switch>
        </BrowserRouter>
    }
        `}</pre>
        </main>
    );
}

export default Home;