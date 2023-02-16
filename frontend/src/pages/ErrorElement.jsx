import { useRouteError, Link } from "react-router-dom";
import "./ErrorElement.css"


const ErrorElement = () => {

    const error = useRouteError()
    return ( 
        <div id="errorElement">
            <div>

                <h1>Sorry, there seems to be an error</h1>
                <p>{error.message || error.statusText}</p>
                <Link to="/">Back to Home Page</Link>
            </div>
        </div>
     );
}
 
export default ErrorElement;