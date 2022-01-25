import './Flat.scss'

const Flat = ({id, name, price, image_url, onClick, selected}) => {
  const classes = selected ? 'flat selected' : 'flat'
  return (
    <div className={classes} onClick={() => onClick(id)}>
      <img src={image_url} alt="" />
      <div className='price-name'>
        <h2>{name}</h2><p>£{price}</p>
      </div>
    </div>
  )
}

export default Flat
