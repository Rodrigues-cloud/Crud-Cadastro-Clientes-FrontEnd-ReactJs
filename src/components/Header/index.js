/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import qualicorp from '../../assets/qualicorp.png';
import bell from '../../assets/bell.png';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';


async function Logout(){
  localStorage.removeItem('@clientes/macaddress');
  window.location.reload();
}

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={qualicorp} alt="Qualicorp" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">INÍCIO</Link>
        <span className="dividir" />
        <Link to="/task">CADASTRAR NOVO CLIENTE</Link>
        <span className="dividir" />
        { !isConnected ?
          <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
          :
        <button type="button" onClick={Logout}>SAIR</button>
        }
        <span className="dividir" />
        <a href="#" id="notification">
          <img src={bell} alt="Notificação" />
          <span>5</span>
        </a>
      </S.RightSide>     
    </S.Container>
  )

}

export default Header;
