import React, {Component} from 'react'
import Slider from 'react-slick'
import dataSource from './dataSource'
import './style.css'

class Category extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            swipeToSlide: true,
            autoplay: true
        }

        return (
            <div className="category">
                <Slider {...settings}>
                    {dataSource.map((section, index) => {
                        return (
                            <div key={index}>
                                {section.map((item, i) => {
                                    return (
                                        <>
                                            <img
                                                className="category__icon"
                                                src={item.src}
                                                alt="加载图片"
                                                key={i}
                                            />
                                        </>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default Category
