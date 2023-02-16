import { Link } from "react-router-dom"
import "./Hospital.css";

const Hospital = ({hospital}) => {

  return (
    <div className="hospital-component">
      <Link state={{hospital}}to={`${hospital.id}`}>
        <h1>{hospital.name}</h1>
      </Link>
      <h3>{hospital.address.city}</h3>
    </div>
  )
}

export default Hospital