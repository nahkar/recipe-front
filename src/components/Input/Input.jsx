import React from 'react';
import Input from './styled';

export default function InputComponent({ propsRef, ...props }) {
  return <Input {...props} ref={propsRef} />;
}
