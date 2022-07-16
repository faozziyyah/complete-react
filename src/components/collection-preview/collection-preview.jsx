import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import styles from './Preview.module.css';

const CollectionPreview = ({ title, items }) => (
  <div className={styles.collectionpreview}>
    <h1 className={styles.title}>{title.toUpperCase()}</h1>
    <div className={ styles.preview }>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
