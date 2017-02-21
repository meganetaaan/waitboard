import React, { Component } from 'react'
import WaitCardList from './WaitCardList'
import './App.css'
/* global! setInterval */

class App extends Component {
  constructor () {
    super()
    this.state = {
      cooking: [{
        number: 1
      }],
      serving: [{
        number: 2
      }],
      count: 3
    }
    window.setInterval(() => {
      const cooking = this.state.cooking
      cooking.push({number: this.state.count})
      this.setState({
        cooking: cooking,
        count: ++this.state.count
      })
    }, 2000)
    window.setInterval(() => {
      const cooking = this.state.cooking
      const serving = this.state.serving
      const card = cooking.shift()
      serving.push(card)
      this.setState({
        cooking: cooking,
        serving: serving
      })
    }, 3000)
    window.setInterval(() => {
      const serving = this.state.serving
      serving.splice(0, 1)
      this.setState({
        serving: serving
      })
    }, 3500)
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>waitboard</h2>
        </div>
        <div className='App-body'>
          <WaitCardList
            cooking={this.state.cooking}
            serving={this.state.serving} />
        </div>
      </div>
    )
  }
}

export default App
