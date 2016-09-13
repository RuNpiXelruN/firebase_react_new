import React, { Component } from 'react'
import { container, header, subHeader } from './styles.scss'

class Home extends Component {
  render () {
    return (
      <div className={container}>
        <h1 className={header}>Chat Book</h1>
        <p className={subHeader}>Real Time Chat built in React</p>
      </div>
    )
  }
}

export default Home
