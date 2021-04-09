import { Component } from "react";
import { connect } from 'react-redux'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import Products from '../components/Products';
import { product } from '../api/product';
import ls from 'local-storage';

class Home extends Component {
  render() {
    const currency = ls.get('currentCurrency');
    return (
      <>
        <Header title={'Home'}/>
        <Navbar currency={currency} isActive={true} isCart={true}/>
        <Banner id={product.id} title={product.title} image={product.src} description={product.desc} />
        <Breadcrumbs isActive={false} page={'Products'} product={null} />
        <Products currency={currency} endpoint={'/'}/>
        <Footer/>
      </>
    );
  }
}

export default connect()(Home);