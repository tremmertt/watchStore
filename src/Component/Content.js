import React, { Component } from 'react'
import Carousel from './Carousel'
import ProductList from './ProductList'

export default class Content extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <ProductList />
            </div>
        )
    }
}
