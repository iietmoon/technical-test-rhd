import { Component } from 'react';
import ProductItem from './ProductItem';
import { config } from '../config';

type ProductsProps ={
  currency: {
    sym: string,
    x: number
  }
   endpoint: string,
}

class Products extends Component<ProductsProps> {
  state = {
    products: []
  }
  componentDidMount(){
    fetch(config.API_HOST+String(this.props.endpoint))
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data,
        })
        console.log(this.state.products)
      })
  }
  render()
    {
      return(
        <div className="container">
            <div className="row">
                {this.state.products.map((product:any)=>(
                  <div className="col-3" key={product.id}>
                     <ProductItem id={product.id} title={product.title} image={product.image} price={product.price} currency={this.props.currency}/>
                  </div>
                ))}
            </div>
        </div>
    )
    }
}

export default Products;