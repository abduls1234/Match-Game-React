import './index.css'

const ImageItem = props => {
  const {imageDetails, clickImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickImage = () => {
    clickImage(id)
  }

  return (
    <li className="image-list-item">
      <button type="button" className="thumbnail-button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImageItem
