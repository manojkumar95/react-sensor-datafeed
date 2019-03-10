import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  label, className, value, name, error, handleChange
}) => (
  <div>
    <div className="checkbox-container">
      <label className="hand-cursor m-0">
        <input name={name} type="checkbox" checked={value} onChange={handleChange} />
        <span className="checkmark" />
        <span className={className}>{label}</span>
      </label>
    </div>
    {error && <div className="error-message">{`${label} ${error}`}</div>}
  </div>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.bool,
  error: PropTypes.string
};

Checkbox.defaultProps = {
  handleChange: null,
  className: '',
  value: false,
  error: ''
};

export default Checkbox;
