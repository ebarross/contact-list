import React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import { StyledInput } from './styles';

type Props = TextFieldProps;

const InputField: React.FC<Props> = (props) => {
  return <StyledInput {...props} />;
};

export default InputField;
