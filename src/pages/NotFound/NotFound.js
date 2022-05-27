import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h1>Page Not Found</h1>
            <p>Sorry this page does not exist.</p>
            <Link to="/">Return to home</Link>
        </>
    );
}

export default NotFound;