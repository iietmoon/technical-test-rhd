import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductView from '../../components/ProductView'
import {config} from '../../config';
import ls from 'local-storage';

const Api = config.API_HOST;


type ProductProps = {
  product:[],
  id: any
}
export const getStaticPaths = async ()=>{
  const res = await fetch(Api);
  const products = await res.json();
  const paths = products.map((product:ProductProps) =>{
     return{
      params: {
        id: product.id.toString()
      }
     }
  });
  return{
    paths,
    fallback: false
  }
}
export const getStaticProps = async (context:any) => {
  const id = context.params.id;
  return{
    props: {
      id,
    }
  }
}

const SingleProduct = (id:any)=>{
  const localStorage: any = ls
  const currency = localStorage.get('currentCurrency');
  return (
    <>
      <Header title={'Product'}/>
      <Navbar currency={currency} isActive={false} isCart={true}/>
      <ProductView id={id} currency={currency}/>
      <Footer/>
    </>
  )
}

export default SingleProduct;