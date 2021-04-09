import {Component} from 'react';
import Router from 'next/router';

class Home extends Component{
    componentDidMount(){
        Router.push('/')
    }
    render(){
        return null
    }
}
export default Home