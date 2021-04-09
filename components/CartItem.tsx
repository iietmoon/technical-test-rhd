import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../redux/actions/actions";

function CartItem(props){
    const {item, index, currency} = props;
    const rPrice = parseInt(item.product.price) * currency.x;
    const fixedPrice = rPrice.toFixed(2)
    return (
        <tr>
           <td scope="row"><img src={item.product.image} alt="" width="30px"/></td>
           <td className="pt-3">{item.product.title}</td>
           <td className="pt-3">{fixedPrice + "  " + currency.sym}</td>
           <td className="pt-3">{item.quantity}</td>
           <td className="d-flex justify-content-center">
           <button onClick={()=> props.removeFromCart(index)}>
               <i className="bi bi-x"></i>
           </button>
           </td>
        </tr>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index)),
    };
}

export default connect(null, mapDispatchToProps)(CartItem);