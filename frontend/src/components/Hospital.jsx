import { Link } from "react-router-dom"
import "./Hospital.css";

const Hospital = ({hospital}) => {

  return (
      <Link className="link" state={{hospital}}to={`${hospital.id}`}>
        <div className="hospital-component">
            <h1>{hospital.name}</h1>
          <h3>{hospital.address.city}</h3>
        </div>
      </Link>
  )
}

export default Hospital