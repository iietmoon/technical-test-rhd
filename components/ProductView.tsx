import { Component } from 'react';
import { config } from '../config';
import {connect} from 'react-redux';
import { addToCart } from '../redux/actions/actions';
import Breadcrumbs from '../components/Breadcrumbs';

type SingleProductProps = {
  id: string,
  currency,
}

class ProductView extends Component<SingleProductProps> {
  state = {
    product: {},
    quantity: 0,
  }
  componentDidMount(){
    const Api = config.API_HOST+"/"+this.props.id
    fetch(Api)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          product: data,
        })
      })
  }
  hundelQuantity = (event) =>{
    const value = event.target.value
    if(value < 0)
    {
      return;
    }
    else{
      this.setState({
        quantity: event.target.value
      })
    }
  }
  addToCart = (product) => {
    this.props.addToCart(product, this.state.quantity);
  }
  render()
    {
      const product = this.state.product;
      const quantity = this.state.quantity;
      const rPrice = parseInt(product.price) * this.props.currency.x;
      const fixedPrice = rPrice.toFixed(2)
      const total =  fixedPrice * quantity;
      return(
        <>
         <Breadcrumbs isActive={false} page={'Product'} product={product.title} />
         <div className="core-product-view container d-flex pb-5">
          <div className={"col card"}>
            <div className={"d-flex justify-content-center align-items-center height-6"}>
              <img src={product.image} alt="Card image cap" width="70%"/>              
            </div>
          </div>
          <div className="col d-flex justify-content-lg-center align-items-center height-6 pl">
            <div className="_content">
              <h3>{product.title}</h3>
              <p><span>{fixedPrice +"  "+ this.props.currency.sym}</span></p>
              <p>{product.description}</p>
              <div className="_form py-5">
                  <input type="number" placeholder="Quantity" value={quantity} onChange={this.hundelQuantity}/>
                  <button onClick={()=>this.addToCart(product)}>Add to cart</button>
                  <p className="py-2">Total : {total + this.props.currency.sym}</p>
              </div>
            </div>
          </div>
        </div>
        </>
    )
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
      addToCart: (productsInfo, quantity) => dispatch(addToCart(productsInfo, quantity)),
  }
}

export default connect(null, mapDispatchToProps)(ProductView);