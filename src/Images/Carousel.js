import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Carousel extends Component {

  state = {
    current: 0,
    left: false,
  }

  imageOrVideo = (img) => {
    let image = /\.jpg/ // add or options for other file extensions
    let video = /\.mp4/
    if (img.match(image)) {
      return <img className='carousel-img' src={img} alt={img}/>
    } else if (img.match(video)) {
      return (
        <video className='carousel-img' onMouseOver={this.playVideo} onMouseOut={this.pauseVideo} >
          <source src={img} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      )
    } else { // think of different default case
      return <img className='carousel-img' src={img} alt={img}/>
    }
  }

  playVideo = e => {
    if (e.target.tagName === "VIDEO") {
      e.target.play()
    }
  }

  pauseVideo = e => {
    if (e.target.tagName === "VIDEO") {
      e.target.pause()
    }
  }

  trackMouse = e => {
    let switchPoint;
    if (e.target.tagName === 'DIV') {
      switchPoint = e.target.offsetWidth / 2
    } else if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
      switchPoint = e.target.parentNode.offsetWidth / 2
    }
    if (e.screenX > switchPoint) {
      if (this.state.left) {
        this.setState({ left: false })
      }
    } else {
      if (!this.state.left) {
        this.setState({ left: true })
      }
    }
  }

  triggerCarousel = e => {
    this.state.left ? this.prevImg() : this.nextImg()
  }

  nextImg = () => {
    const { current } = this.state
    const { images } = this.props

    if (current < images.length-1) {
      this.setState({ current: current + 1 })
    }
  }

  prevImg = () => {
    const { current } = this.state

    if (current > 0) {
      this.setState({ current: current - 1 })
    }
  }

  getCurrentImage = () => {
    const { current } = this.state
    const { images } = this.props
    return this.imageOrVideo(images[current])
  }

  render(){
    const { height, width } = this.props

    return (
      <div
        className={this.state.left ? 'carousel left' : 'carousel' }
        onMouseMove={this.trackMouse}
        onClick={this.triggerCarousel}
        style={{ height, width }} >
        {this.getCurrentImage()}
      </div>
    )
  }
}

Carousel.propTypes = {
  images: PropTypes.array,
  height: PropTypes.string,
  width: PropTypes.string
}

Carousel.defaultProps = {
  images: [],
  height: '60vh',
  width: '60vw'
}

export default Carousel
