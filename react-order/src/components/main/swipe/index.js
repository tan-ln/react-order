import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSwipe from 'react-swipe'

import './index.css'

class Swipe extends Component {

  static propTypes = {
    data: PropTypes.array
  }

  constructor () {
    super ()
    this.state = {
      currentPage: 0,
      swipeNum: 0,
      data: [] 
    }
  }

  transitionEnd = (index, elem) => {
    this.setState({
      currentPage: index
    })
  }

  render () {
    // 分页器
    let pagination = []

    let swipeWrapper = this.props.data.map((item, key) => {
      pagination.push(
        <li className={`swipe_pagination_cell ${ this.state.currentPage === key ? 'is-active' : '' }`} key={ key }></li>
      )
      return (
        <div key={key} className="swiper-slide">
          { 
            item.map((i, index) => {
            return (
              <div key={index} className="swipe_cell" onClick={ this.props.clickSwipeCate.bind(this, i) }>
                <img src={ i.image_hash } alt={ i.name }/>
                <span>{ i.name }</span>
              </div>
            )
          }) }
        </div>
      )
    })

    return (
      <div className="foodentry swiper-container">
        <div className="swiper-wrapper">
          { swipeWrapper }
        </div>
        {/* <ul className="swiper_pagination"> */}
          {/* { pagination } */}
        {/* </ul> */}
      </div>
    )
  }
}

export default Swipe
