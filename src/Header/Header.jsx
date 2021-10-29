import React from "react";
import './Header.scss';
import logo from '../assets/images/logo.svg';
import {connect} from "react-redux";
import {setPage} from "../redux/form-reducer";
const Header = ({setPage}) => {
  return(
      <header className="header">
          <div id={'logo'}><img src={logo} alt="logo"/></div>
          <div onClick={()=>{setPage('Form')}} className={'link'}>Форма</div>
          <div onClick={()=>{setPage('Preview')}} className={'link'}>Превью</div>
      </header>
  )
}
export default connect (()=>({}),{setPage})(Header);