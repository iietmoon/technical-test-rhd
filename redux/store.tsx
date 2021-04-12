import { createStore,compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import cartReducer from './reducers/cartReducer';
import ls from 'local-storage';
import {currencies} from '../api/currencies';

const localStorage:any = ls;

function loadState(){
    const state = localStorage.get('cart');
    const currency = localStorage.get('currentCurrency');
    currency ? null : localStorage.set('currentCurrency', currencies.usd);
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

function saveState(state:any){
    console.log('save data')
    localStorage.set('cart', JSON.stringify(state))
}

const Store = createStore(
    cartReducer, 
    loadState(),
    applyMiddleware(thunk)
    )
Store.subscribe(()=>{
    saveState(Store.getState())
});

export default Store;