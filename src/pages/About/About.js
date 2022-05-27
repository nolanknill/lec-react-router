import "./About.scss";
import classImg from "../../assets/images/class-photo.jpg";
import { Switch, Route, Link } from "react-router-dom";
import Educators from "../../components/Educators/Educators";

export default function About({ match, educatorsData }) {
  document.title = "Lecture: React Router | About Toronto Light Salmons";
  
  return (
    <main className="about">
        <h1>About the Toronto Light Salmons</h1>
        <p>Experts consider us the greatest curling team of all time.</p>
        <p>We DO NOT approve of chocolate donut holes.</p>
        <Link to={match.url + "/educators"}>Show Educators</Link>
        <Switch>
          <Route path={match.path + "/educators"}>
            <Educators educatorsData={educatorsData} />
          </Route>
        </Switch>
        <figure className="about__figure">
          <img className="about__class-photo" src={classImg} alt="First day of class"/>
          <figcaption>#SquadGoals</figcaption>
        </figure>
    </main>
  )
}