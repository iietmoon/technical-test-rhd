import { Component } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import CartItem from '../components/CartItem';
import ls from 'local-storage';
import {connect} from "react-redux";
import { clearCart } from '../redux/actions/actions';

class Cart extends Component {
  placeOrder = ()=>{
    alert('📦 Thanks for your Order, We will work on it in while. with a lot of thanks')
    this.props.clearCart;
  }
  render() {
    const currency = ls.get('currentCurrency');
    return (
      <>
        <Header title={"cart"} />
        <Navbar currency={currency} isActive={false} isCart={true} />
        <Breadcrumbs isActive={false} page={"Cart"} product={false} />
        <div className="container core-cart height-7">
          <table className="table border rounded-3">
            <thead>
              <tr>
                <th scope="col">IMAGE</th>
                <th scope="col">PRODUCT NAME</th>
                <th scope="col">UNIT PRICE</th>
                <th scope="col">QTY</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.cartItems.map((item, index)=>(
                  <CartItem item={item} index={index} key={index} currency={currency} />
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-end align-items-center">
            <div>
             <p>Total : {this.props.total.toFixed(2) + "  " + currency.sym}</p>
             <button class="_btn" onClick={this.props.clearCart} className="btn btn-primary">Place Order Now <i className="bi bi-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state)=>{
  const currency = ls.get('currentCurrency');
  return{
      cartItems: state.cart,
      total: state.cart.reduce((total, item)=> total + currency.x*item.quantity*parseInt(item.product.price), 0)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
       clearCart: () => dispatch(clearCart()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
