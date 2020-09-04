import styled from 'styled-components';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TableCell } from '@material-ui/core';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
`;

export const Title = styled.h1``;

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
