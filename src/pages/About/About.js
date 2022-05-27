import "./About.scss";
import classImg from "../../assets/images/class-photo.jpg";

export default function About() {
  return (
    <main className="about">
        <h1>About the Toronto Light Salmons</h1>
        <p>Experts consider us the greatest curling team of all time.</p>
        <p>We DO NOT approve of chocolate donut holes.</p>
        <img className="about__class-photo" src={classImg} alt="First day of class"/>
        <p>#SquadGoals</p>
    </main>
  )
}
