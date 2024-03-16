import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import ImageItems from '../ImageItems'

class MatchGame extends Component {
  state = {
    activeTabId: '',
    imagesList: [],
  }

  shuffleImage = () => {
    const shuffleImagesList = () => {
      const {imagesList} = this.props
      return imagesList.sort(() => Math.random() - 0.5)
    }
    this.setState({imagesList: shuffleImagesList()})
  }

  render() {
    const {tabsList} = this.props
    this.shuffleImage()

    const {imagesList} = this.state

    const imageDetails = imagesList[0]
    const {imageUrl, id, thumbNailUrl} = imageDetails

    return (
      <div className="app-container">
        <div className="nav-bar-container">
          <NavBar />
          <div className="items-container">
            <ImageItems
              imageId={id}
              imageUrl={imageUrl}
              thumbNailUrl={thumbNailUrl}
              key={id}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MatchGame
