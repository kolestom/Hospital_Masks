import { Link } from "react-router-dom"

const Hospital = ({hospital}) => {

  return (
    <>
    <Link state={{hospital}}to={`:${hospital.id}`}>
      <h1>{hospital.name}</h1>
      <h1>{hospital.address.city}</h1>
    </Link>
    
    </>
  )
}

export default Hospital