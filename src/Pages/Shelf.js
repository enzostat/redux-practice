import React from 'react'
import {connect} from 'react-redux'
import * as CartActions from '../Actions/cartActions'
import * as ShelfActions from '../Actions/shelfActions'
import { addToWishes } from '../Actions/wishlistActions'

class Shelf extends React.Component {

    state = {
        newStockItem: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addToShelf(this.state.newStockItem)
        this.setState({newStockItem: ''})
    }

    render() {

        let shelfItems = this.props.shelf.map((item, index) => {
            return (<li key={index}>
                {item}
                <button onClick={() => this.props.addToCart(item)}>Add to Cart</button>
                <button onClick={() => this.props.addToWishes(item)}>Add to Wishlist</button>
            </li>)
        })

        return (
            <div>
                <h1>Shelf</h1>
                <ul>
                    {shelfItems}
                </ul>
                <hr />
                <h2>Add Stock</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newStockItem} onChange={e => this.setState({newStockItem: e.target.value})} />
                    <input type="submit" value="Add New Stock" />
                </form>
            </div>
        )
    }
}

//take the state from the store; map it (add it) to the props for this component
const mapStateToProps = (state) => {
    return {
        shelf: state.shelf
    }
}

export default connect(mapStateToProps, {
    addToShelf: ShelfActions.addToShelf,
    addToCart: CartActions.addToCart,
    addToWishes: addToWishes
})(Shelf)