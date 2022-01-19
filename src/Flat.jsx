import './Flat.scss'

const Flat = ({id, name, price, image_url}) => {
  return (
    <div className="flat">
      <img src={image_url} alt="" />
      <div className='price-name'>
        <h2>{name}</h2><p>£{price}</p>
      </div>
    </div>
  )
}

export default Flat
