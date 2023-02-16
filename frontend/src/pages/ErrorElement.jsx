import { useRouteError, Link } from "react-router-dom";


const ErrorElement = () => {

    const error = useRouteError()
    return ( 
        <div>
            <h1>Sorry, there seems to be an error</h1>
            <p>{error.message || error.statusText}</p>
            <Link to="/">Back Home</Link>
        </div>
     );
}
 
export default ErrorElement;