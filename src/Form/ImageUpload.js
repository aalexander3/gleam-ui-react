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
    reader.addEventListener('load', () => this.compressImage(reader.result, img.name));
    reader.readAsDataURL(img);
  }

  compressImage = (imgUrl, imageName) => {
    let canvas = document.createElement('canvas')
    let newDataUrl;
    let image = new Image()
    image.src = imgUrl
    image.addEventListener('load', () => {
      let ctx = canvas.getContext("2d")
      canvas.width = image.width
      canvas.height = image.height
      ctx.drawImage(image, 0, 0, image.width, image.height)
      if (this.props.blob) {
        canvas.toBlob((blob) => this.saveImageBlob(blob, imageName), "image/jpeg", 0.5)
      }  else {
        newDataUrl = canvas.toDataURL("image/jpeg", this.props.compression)
        this.saveImage(newDataUrl)
      }
    })
    return newDataUrl
  }

  saveImage = imageUrl => {
    this.setState({
      imageUrl: imageUrl,
      loading: false
    }, () => this.props.getImage(imageUrl))
  }

  saveImageBlob = (imageBlob, imageName) => {
    let formData = new FormData()
    formData.append('selectedFile', imageBlob, imageName);
    formData.append('type', 'image/jpeg');

    this.setState({
      imageUrl: URL.createObjectURL(imageBlob),
      loading: false
    }, () => this.props.getImage(formData))
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
        {label && <p>{this.props.label}</p>}
        <label
          htmlFor='upload-input'
          className='upload-label' >
          {imageUrl ? <img className="upload-preview" src={imageUrl} alt="file" /> : uploadButton}
        </label>

        <input
          id='upload-input'
          className='upload-input'
          onChange={this.uploadImage}
          name='file'
          type='file' />
      </div>
    )
  }
}

ImageUpload.proptypes = {
  getImage: PropTypes.func,
  label: PropTypes.string,
  compression: PropTypes.number,
  blob: PropTypes.bool
}

ImageUpload.defaultProps = {
  getImage: () => {},
  label: '',
  compression: 1,
  blob: false
}


export default ImageUpload
