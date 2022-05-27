import { Link } from "react-router-dom";

function Educators({ educatorsData }) {
    return (
        <ul>    
            {educatorsData.map((educator) => {
                return (
                    <li>
                        <Link to={`/educator/${educator.name}`}>{educator.name}</Link>
                    </li>
                )
            })}
        </ul>
  )
}

export default Educators