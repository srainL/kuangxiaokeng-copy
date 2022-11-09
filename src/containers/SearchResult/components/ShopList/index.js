import React, { Component } from 'react'
import ShopItem from '../ShopItem'
import './style.css'

const dataSource = [
    {
        id: 's-1',
        url:
            'https://m.dianping.com/shop/513329?from=shoplist&shoplistqueryid=af807de1-9f6f-4a99-900b-5c7e13ebdfd0',
        pic:
            'https://img2.baidu.com/it/u=3730558386,3800377882&fm=26&fmt=auto',
        shop: '二食堂油泼面',
        star: 45,
        price: 106,
        commentQuantity: 20305,
        region: '二食堂',
        category: '面食'
    },
    {
        id: 's-2',
        url:
            'http://m.dianping.com/shop/G4LFTyUMF22rHkie',
        pic:
            'https://img0.baidu.com/it/u=2253918559,1469184528&fm=26&fmt=auto',
        shop: '肯德基',
        star: 50,
        price: 92,
        quantity: 6715,
        region: '二食堂',
        category: '快餐'
    },
    {
        id: 's-3',
        url:
            'https://m.dianping.com/shop/98576594?from=shoplist&shoplistqueryid=af807de1-9f6f-4a99-900b-5c7e13ebdfd0',
        pic:
            'https://img0.baidu.com/it/u=1238170688,1855989599&fm=26&fmt=auto',
        shop: '炸串拌饭',
        star: 50,
        price: 104,
        quantity: 200,
        region: '一食堂',
        category: '炸串'
    },
    {
        id: 's-4',
        url:
            'https://m.dianping.com/shop/93465484?from=shoplist&shoplistqueryid=df10efdf-cc04-4e18-9bc6-17271fe4a96f',
        pic:
            'https://img0.baidu.com/it/u=2890194768,425087174&fm=26&fmt=auto',
        shop: '拐角烤肉',
        star: 50,
        price: 114,
        quantity: 4025,
        region: '小南门',
        category: '烤肉'
    },
    {
        id: 's-5',
        url:
            'https://m.dianping.com/shop/21411786?from=shoplist&shoplistqueryid=df10efdf-cc04-4e18-9bc6-17271fe4a96f',
        pic:
            'https://img2.baidu.com/it/u=3121866823,3463198559&fm=15&fmt=auto',
        shop: '三只羊',
        star: 50,
        price: 92,
        quantity: 6715,
        region: '小南门',
        category: '烧烤'
    }
]

class ShopList extends Component {
    render() {
        return (
            <div className="shopList">
                <div className="shopList__filter">
                    <span className="shopList__filterItem">全部商区</span>
                    <span className="shopList__filterItem">全部分类</span>
                    <span className="shopList__filterItem">智能排序</span>
                </div>
                <div className="shopList__list">
                    {dataSource.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <ShopItem data={item} />
                                {index < dataSource.length - 1 ? (
                                    <div className="shopList__divider" />
                                ) : null}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ShopList
