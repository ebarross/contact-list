import styled from 'styled-components';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TableCell } from '@material-ui/core';
import Button from '../Button';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
`;

export const Title = styled.h1``;

export const StyledButton = styled(Button)`
  svg {
    margin-top: 3px;

    @media (min-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 767.8px) {
    padding: 0px;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    span {
      display: none;
    }
  }
`;

export const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#333',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

export const LoaderContainer = styled.div`
  margin-top: 100px;
`;
