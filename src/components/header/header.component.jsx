import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import styles from './Header.module.css';

const Header = ({ currentUser }) => (
  <div className={ styles.header }>
    <Link className={ styles.logocontainer } to='/'>
      <Logo className={ styles.logo } />
    </Link>
    <div className={ styles.options }>
      <Link className={ styles.option } to='/shop'>
        SHOP
      </Link>
      <Link className={ styles.option } to='/signin'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className={ styles.option }onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className={ styles.option } to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
