import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Shelf from './Pages/Shelf'
import Wishlist from './Pages/Wishlist'
import { connect } from 'react-redux'


const App = props => {
  // class App extends React.Component {
  //   render() {
  return (
    <div className="App">
      <Router>
        <div>
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shelf">Shelf</Link>
                ({Object.keys(props.shelf).length})
              </li>
              <li>
                <Link to="/cart">Cart</Link>
                ({Object.keys(props.cart).length})
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
                ({Object.keys(props.wishlist).reduce((acc, item) => acc + props.wishlist[item], 0)})
              </li>
            </ul>
          </nav>
        </header>
        <main className="content">
          <Route exact path="/" component={Home} />
          <Route path="/shelf" component={Shelf} />
          <Route path="/cart" component={Cart} />
          <Route path="/wishlist" component={Wishlist} />


        </main>
        </div>
      </Router>

    </div>
  ); 
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    shelf: state.shelf,
    wishlist: state.wishlist
  }
}

export default connect(mapStateToProps, {})(App);
