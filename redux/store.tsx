import { createStore,compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import cartReducer from './reducers/cartReducer';
import ls from 'local-storage';
import throttle from 'lodash.throttle';
import {currencies} from '../api/currencies';

function loadState(){
    const state = ls.get('cart');
    const currency = ls.get('currentCurrency');
    currency ? null : ls.set('currentCurrency', currencies.usd);
    try{
        if(state !== null){
            console.log('cart get')
            return JSON.parse(state);
        }
    } catch(e){
        //ingore erros 
    }
    console.log('cart no here')
    return{
        cart: []
    }
}

function saveState(state){
    console.log('save data')
    ls.set('cart', JSON.stringify(state))
}

const Store = createStore(
    cartReducer, 
    loadState(),
    applyMiddleware(thunk)
    )
Store.subscribe(throttle(()=>{
    saveState(Store.getState());
}))

export default Store;