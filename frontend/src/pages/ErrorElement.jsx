import { useRouteError, Link } from "react-router-dom";
import "./ErrorElement.css"


const ErrorElement = () => {

    const error = useRouteError()
    return ( 
        <div id="errorElement">
                <h1>Sorry, there seems to be an error</h1>
                <h3>Please, reload the page or use the button below</h3>
                <p id="e_message">Error message: {error.message || error.statusText}</p>
                <Link id="e_button" to="/">Back to Landing Page</Link>
        </div>
     );
}
 
export default ErrorElement;