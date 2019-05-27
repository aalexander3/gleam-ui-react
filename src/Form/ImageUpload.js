import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class ImageUpload extends Component {
  state = {
    imageUrl: null,
    loading: false,
  }

  uploadImage = e => {
    this.setState({ loading: true })
    const file = e.target.files[0]

    if (file && file.type.includes("image")) {
      this.getBase64(file)
    }
  }

  getBase64 = img => {
    const reader = new FileReader();
    reader.addEventListener('load', () => this.compressImage(reader.result));
    reader.readAsDataURL(img);
  }

  compressImage = imgUrl => {
    let canvas = document.createElement('canvas')
    let newDataUrl;
    let image = new Image()
    image.src = imgUrl
    image.addEventListener('load', () => {
      let ctx = canvas.getContext("2d")
      canvas.width = image.width
      canvas.height = image.height
      ctx.drawImage(image, 0, 0, image.width, image.height)
      newDataUrl = canvas.toDataURL("image/jpeg", this.props.compression)
      this.saveImage(newDataUrl)
    })
    return newDataUrl
  }

  saveImage = imageUrl => {
    this.setState({
      imageUrl: imageUrl,
      loading: false
    }, () => {
      this.props.getImage(imageUrl)
    })
  }

  render(){
    const { imageUrl, loading } = this.state
    const { label } = this.props

    const uploadButton = (
       <div className="upload-button">
         <FontAwesomeIcon icon={ imageUrl ? faCheckCircle : faPlusCircle } />
         <p>{imageUrl ? 'File Uploaded': 'Upload File'}</p>
       </div>
     )

    return (
      <div className="uploader">
        <label
          htmlFor='upload-input'
          className='upload-label' >
          {imageUrl ? <img className="upload-preview" src={imageUrl} alt="file" /> : uploadButton}
        </label>

        <div>
          <input
            id='upload-input'
            className='upload-input'
            onChange={this.uploadImage}
            name='file'
            type='file' />
          {label && <p>{this.props.label}</p>}
        </div>
      </div>
    )
  }
}

ImageUpload.proptypes = {
  getImage: PropTypes.func,
  label: PropTypes.string,
  compression: PropTypes.number
}

ImageUpload.defaultProps = {
  getImage: () => {},
  label: '',
  compression: 1
}


export default ImageUpload
