import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const textColor = '#b7b7b7';
const textFocusColor = '#333333';

export const StyledInput = styled(TextField)`
  && {
    margin-bottom: 10px;

    .MuiFormLabel-root.Mui-focused:not(.Mui-error) {
      color: ${textFocusColor};
    }

    .MuiInput-input {
      color: ${textColor};

      :focus {
        color: ${textFocusColor};
      }
    }

    .MuiInput-underline:before {
      border-bottom-color: ${textColor};
    }

    .MuiInput-underline:not(.Mui-error):after {
      border-bottom-color: ${textFocusColor};
    }
  }
`;
