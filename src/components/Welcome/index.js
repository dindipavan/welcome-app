import {Component} from 'react'

import './index.css'
import {subscribe} from 'diagnostics_channel'

class Welcome extends Component {
  state = {isSubscribed: true}

  renderAuthButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      ;<button className="button">Subscribed</button>
    } else {
      ;<button className="button">subscribe</button>
    }
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description"> Thank You! Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default Welcome
