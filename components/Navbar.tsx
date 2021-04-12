import { Component } from 'react';
import Link from 'next/link';
import Bubble  from './Helpers/Bubble';
import ls from 'local-storage';
import {currencies} from '../api/currencies';

const localStorage: any = ls

type NavbarProps = {
    isActive: boolean,
    currency: {
      name: string,
      sym: string,
      x: number
    }
    isCart: boolean,
}


class Navbar extends Component<NavbarProps> {
    setUsd = ()=>{
      localStorage.set('currentCurrency', currencies.usd);
      location.reload();
    }
    setEuro = ()=>{
      console.log('languge seted')
      localStorage.set('currentCurrency', currencies.euro);
      location.reload();
    }
    setYen = ()=>{
      console.log('languge seted')
      localStorage.set('currentCurrency', currencies.yen);
      location.reload();
    }
    state = {
      cats: null,
    }
    render(){
      return(
        <div className={this.props.isActive? "core-navbar second-bg" : " core-navbar muted-yeal-bg shadow-sm"}>
          <div className="core-nav-top container-sm d-flex justify-content-center align-items-center border-bottom border-dark py-3">
            <div className="col d-flex justify-content-start">
              <div className="border-start border-dark d-flex align-items-center">
                <div className="_curr">
                  <div>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {this.props.currency.sym + this.props.currency.name}
                      </a>
                      <ul
                        className="dropdown-menu bg-light border-0 py-0"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a onClick={this.setUsd} className="dropdown-item" href="#CURRENCY" >
                            {currencies.usd.sym + '  ' + currencies.usd.name}
                          </a>
                        </li>
                        <li>
                          <a onClick={this.setEuro} className="dropdown-item" href="#CURRENCY">
                            {currencies.euro.sym + '  ' + currencies.euro.name}
                          </a>
                        </li>
                        <li>
                          <a onClick={this.setYen} className="dropdown-item" href="#CURRENCY">
                            {currencies.yen.sym + '  ' + currencies.yen.name}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <a className="navbar-brand" href="/">
                <img src="/logo.png" alt="logo" width="200px" />
              </a>
            </div>
            <div className="col d-flex justify-content-end">
              <Link href="/cart">
                <div className="cart px-2 d-flex">
                  <i className="bi bi-bag px-2"></i>
                  {this.props.isCart ? <Bubble/> : null}
                </div>
              </Link>
            </div>
          </div>
          <div className="core-nav-bottom container d-flex justify-content-center align-items-center py-3">
            <div>
              <ul className="list-inline">
                <li className="list-inline-item px-3">
                  <Link href="/search/men-clothing">Men clothing</Link>
                </li>
                <li className="list-inline-item px-3">
                  <Link href="/search/jewelery">Jewelery</Link>
                </li>
                <li className="list-inline-item px-3">
                  <Link href="/search/electronics">Electronics</Link>
                </li>
                <li className="list-inline-item px-3">
                  <Link href="/search/women-clothing">Women clothing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
}

export default Navbar;