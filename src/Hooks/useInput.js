import { useState } from 'react';

export default (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  console.log('### this is useInput: ', { value, onChange, setValue });
  return { value, onChange, setValue };
};
