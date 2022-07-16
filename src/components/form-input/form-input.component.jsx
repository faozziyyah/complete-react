import React from 'react';

import styles from './Form.module.css';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className={ styles.group }>
    <input className={ styles.forminput } onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
