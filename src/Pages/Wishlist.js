import React from 'react'
import { connect } from 'react-redux'
import * as WishlistActions from '../Actions/wishlistActions'

class Wishlist extends React.Component {
    render() {

        let wishItems = Object.keys(this.props.wishlist).map((item, index) => {
            return (
                <li key={index}>
                    {item} ({this.props.wishlist[item]})
                    <button onClick={() => this.props.removeFromWishes(item)}>Remove Item</button>
                </li>
            )
        })

        return (
            <div>
                <h1>Wishlist</h1>
                <ul>
                    {wishItems}
                </ul>
                <button onClick={this.props.clearWishes}>Clear All</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        wishlist: state.wishlist
    }
}

export default connect(mapStateToProps, WishlistActions)(Wishlist)