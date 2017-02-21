import React, { Component } from 'react'
import FlipMove from 'react-flip-move'
import WaitCard from './WaitCard'
import './WaitCardList.css'

class WaitCardList extends Component {
  render () {
    return (
      <div className='WaitCardList'>
        <div className='cooking'>
          <span>Cooking...</span>
          <FlipMove duration={500} easing='ease-out'>
            {this.props.cooking.map(c => {
              return <WaitCard key={c.number} number={c.number} />
            })}
          </FlipMove>
        </div>
        <div className='serving'>
          <span>Serving...</span>
          <FlipMove duration='500' easing='ease-out'>
            {this.props.serving.map(c => {
              return <WaitCard key={c.number} number={c.number} />
            })}
          </FlipMove>
        </div>
      </div>
    )
  }
}

export default WaitCardList
