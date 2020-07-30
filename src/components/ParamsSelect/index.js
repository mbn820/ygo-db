import React from 'react';
import Form from 'react-bootstrap/Form';

const ParamsSelect = ({label, name, value, options, grouped, onChange, display}) => {
  const displayOption = (option) => {
    return display ? display(option) : option;
  }

  return (
    <>
      <Form.Group className="mb-md-0">
        {label ? <Form.Label className="small">{label}</Form.Label> : null}
        <Form.Control as="select" size="sm" name={name} value={value} onChange={onChange}>
          <option value="">ALL</option>
          {grouped
            ? <>
                {Object.keys(options).map(key => (
                  <optgroup label={key} key={key}>
                    {options[key].map(option => <option value={option} key={option}>{displayOption(option)}</option>)}
                  </optgroup>
                ))}
              </>
            : <>
                {options.map(option => <option value={option} key={option}>{displayOption(option)}</option>)} 
              </> 
          }
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default ParamsSelect;
