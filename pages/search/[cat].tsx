//Loads
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Breadcrumbs from '../../components/Breadcrumbs';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import ls from 'local-storage';

const CategoryProduct = ()=>{
  const router = useRouter()
  const { cat } = router.query;
  const localStorage: any = ls
  const currency = localStorage.get('currentCurrency');
  const endpoint = '/category/'+ cat
  return (
    <>
      <Header title={'Product'}/>
      <Navbar currency={currency} isActive={false} isCart={true}/>
      <Breadcrumbs isActive={false} page={'Products'} product={cat} />
      <div className="height-8">
        <Products currency={currency} endpoint={endpoint}/>
      </div>
      <Footer/>
    </>
  )
}

export default CategoryProduct;