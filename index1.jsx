import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name, id} = destinationDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
