import React from 'react';

import Directory from '../../components/directory/directory.component';

import styles from './Homepage.module.css';

const HomePage = () => (
  <div className={ styles.homepage }>
    <Directory />
  </div>
);

export default HomePage;
