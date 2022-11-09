import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class ProductOverview extends Component {
    render() {
        const {
            id,
            picture,
            shop,
            product,
            currentPrice,
            oldPrice
        } = this.props.data
        return (
            <div className="productOverview">
                <div className="productOverview__header">
                    <div className="productOverview__imgContainer">
                        <img
                            alt=""
                            className="productOverview__img"
                            src="https://img1.baidu.com/it/u=2993759874,1883577842&fm=26&fmt=auto"
                        />
                    </div>
                    <div className="productOverview__baseInfo">
                        <div className="productOverview__title">一食堂</div>
                        <div className="productOverview__content">
                            铁板饭
                        </div>
                    </div>
                </div>
                <div className="productOverview__purchase">
                    <span className="productOverview__symbol">¥</span>
                    <span className="productOverview__price">
                        10.9
                    </span>
                    <span className="productOverview__price--old">
                        ¥20
                    </span>
                    {/* TODO 填写产品ID */}
                    <Link 
                        className="productOverview__btn" 
                        to={`/purchase/${id}`}>立即购买</Link>
                </div>
                <ul className="productOverview__remark">
                    <li className="productOverview__remarkItem">
                        <i className="productOverview__sign1" />
                        <span className="productOverview__desc">随时可退</span>
                    </li>
                    <li className="productOverview__remarkItem">
                        <i className="productOverview__sign2" />
                        <span className="productOverview__desc">
                            过期自动退
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ProductOverview
