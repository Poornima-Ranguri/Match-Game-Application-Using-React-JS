import './index.css'

const ImageItems = props => {
  const {imageUrl, id, thumbnailUrl} = props

  return (
    <li key={id}>
      <img src={imageUrl} alt="match" />
    </li>
  )
}

export default ImageItems
