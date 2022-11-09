import React, {Component} from 'react'
import './style.css'

class ShopInfo extends Component {
    render() {
        const {name, address, phone, star} = this.props.data
        const {total} = this.props
        return (
            <div className="shopInfo">
                <div className="shopInfo__header">
                    外卖（1）
                    <span className="shopInfo__arrow"/>
                </div>
                <div className="shopInfo__middle">
                    <div className="shopInfo__middleLeft">
                        <div className="shopInfo__shopName">南湖美团专送</div>
                        <div className="shopInfo__starsWrapper">
                            <span className="shopInfo__stars">
                                <i
                                    className="shopInfo__stars--red"
                                    style={{width: 2 * star + "%"}}
                                />
                            </span>
                            <span className="shopInfo__distance">
                                小于1km</span>
                        </div>
                    </div>
                    <a className="shopInfo__middleRight" href={`tel://${phone}`}>
                        <i className="shopInfo__phoneIcon"/>
                    </a>
                </div>
                <div className="shopInfo__bottom">
                    <i className="shopInfo__locationIcon"/>中国矿业大学一食堂
                </div>
            </div>
        )
    }
}

export default ShopInfo
