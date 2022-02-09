import React, { Component } from 'react'
import BackBtn from '../../../components/backButton'
import { formatUrl } from '../../../api/config.js' 

import './index.css'

class ShopHeader extends Component {
  
  render () {
    let shopInfo = this.props.headerInfo,
       shopBgImg = formatUrl(shopInfo.image_path, 'bg'),
      shopAvatar = formatUrl(shopInfo.image_path, 'avatar')
    
    return (
      <div className="header_wrapper">
        <div className="shop_msg">
          <div className="shop_bg_img" style={{ backgroundImage: `url(${shopBgImg})` }} >
            <BackBtn />
          </div>
          <div className="shop_info">
            <div className="shop_avatar">
              <img src={shopAvatar} alt={shopInfo.name} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShopHeader
