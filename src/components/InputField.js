import React from 'react';

const inputClass = "block w-full px-3 py-2 border border-gray-300 rounded mb-2";

const InputField = ({ id, type, placeholder }) => (
  <div>
    <label htmlFor={id} className="sr-only">{placeholder}</label>
    <input id={id} name={id} type={type} autoComplete={id} required
      className={inputClass}
      placeholder={placeholder} />
  </div>
);

export default InputField;
