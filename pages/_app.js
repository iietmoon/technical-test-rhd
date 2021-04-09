import '../styles/core.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/icons.css';
import {Provider} from 'react-redux';
import Store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={Store}>
       <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
