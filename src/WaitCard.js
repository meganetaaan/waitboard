import React, { Component } from 'react'
import './WaitCard.css'

class WaitCard extends Component {
  render () {
    return (
      <div className='WaitCard'>
        {this.props.number}
      </div>
    )
  }
}

export default WaitCard
